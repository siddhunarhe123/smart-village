package com.smartvillage.dao;

import com.smartvillage.model.Complaint;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Data Access Object for Complaint Management
 */
public class ComplaintDAO {

    public List<Complaint> getAllComplaints() {
        List<Complaint> list = new ArrayList<>();
        String sql = "SELECT c.*, cit.full_name as citizen_name, u.mobile as citizen_mobile " +
                     "FROM complaints c " +
                     "JOIN citizens cit ON c.citizen_id = cit.citizen_id " +
                     "JOIN users u ON cit.user_id = u.user_id " +
                     "ORDER BY c.created_at DESC";

        try (Connection conn = DBConnection.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {

            while (rs.next()) {
                list.add(mapResultSetToComplaint(rs));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }

    public List<Complaint> getComplaintsByCitizenId(String citizenId) {
        List<Complaint> list = new ArrayList<>();
        String sql = "SELECT c.*, cit.full_name as citizen_name, u.mobile as citizen_mobile " +
                     "FROM complaints c " +
                     "JOIN citizens cit ON c.citizen_id = cit.citizen_id " +
                     "JOIN users u ON cit.user_id = u.user_id " +
                     "WHERE c.citizen_id = ? " +
                     "ORDER BY c.created_at DESC";

        try (Connection conn = DBConnection.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, citizenId);
            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    list.add(mapResultSetToComplaint(rs));
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }

    public boolean insertComplaint(Complaint c) {
        String sql = "INSERT INTO complaints (complaint_id, citizen_id, category, title, description, ward, landmark, photo_url, priority, status) " +
                     "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'Submitted')";

        try (Connection conn = DBConnection.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, c.getComplaintId());
            ps.setString(2, c.getCitizenId());
            ps.setString(3, c.getCategory());
            ps.setString(4, c.getTitle());
            ps.setString(5, c.getDescription());
            ps.setString(6, c.getWard());
            ps.setString(7, c.getLandmark());
            ps.setString(8, c.getPhotoUrl());
            ps.setString(9, c.getPriority());

            int rows = ps.executeUpdate();
            return rows > 0;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    public boolean updateStatus(String complaintId, String newStatus, String adminRemarks, String assignedTo, String updatedBy) {
        String updateComplaintSql = "UPDATE complaints SET status = ?, admin_remarks = ?, assigned_to = ?, updated_at = NOW() WHERE complaint_id = ?";
        String insertAuditSql = "INSERT INTO complaint_updates (complaint_id, status_changed_to, officer_remarks, updated_by) VALUES (?, ?, ?, ?)";

        Connection conn = null;
        try {
            conn = DBConnection.getConnection();
            conn.setAutoCommit(false);

            try (PreparedStatement psUpdate = conn.prepareStatement(updateComplaintSql)) {
                psUpdate.setString(1, newStatus);
                psUpdate.setString(2, adminRemarks);
                psUpdate.setString(3, assignedTo);
                psUpdate.setString(4, complaintId);
                psUpdate.executeUpdate();
            }

            try (PreparedStatement psAudit = conn.prepareStatement(insertAuditSql)) {
                psAudit.setString(1, complaintId);
                psAudit.setString(2, newStatus);
                psAudit.setString(3, adminRemarks);
                psAudit.setString(4, updatedBy);
                psAudit.executeUpdate();
            }

            conn.commit();
            return true;
        } catch (SQLException e) {
            if (conn != null) {
                try { conn.rollback(); } catch (SQLException ex) { ex.printStackTrace(); }
            }
            e.printStackTrace();
            return false;
        } finally {
            if (conn != null) {
                try { conn.setAutoCommit(true); conn.close(); } catch (SQLException e) { e.printStackTrace(); }
            }
        }
    }

    private Complaint mapResultSetToComplaint(ResultSet rs) throws SQLException {
        Complaint c = new Complaint();
        c.setComplaintId(rs.getString("complaint_id"));
        c.setCitizenId(rs.getString("citizen_id"));
        c.setCitizenName(rs.getString("citizen_name"));
        c.setCitizenMobile(rs.getString("citizen_mobile"));
        c.setCategory(rs.getString("category"));
        c.setTitle(rs.getString("title"));
        c.setDescription(rs.getString("description"));
        c.setWard(rs.getString("ward"));
        c.setLandmark(rs.getString("landmark"));
        c.setPhotoUrl(rs.getString("photo_url"));
        c.setPriority(rs.getString("priority"));
        c.setStatus(rs.getString("status"));
        c.setAssignedTo(rs.getString("assigned_to"));
        c.setAdminRemarks(rs.getString("admin_remarks"));
        c.setCreatedAt(rs.getTimestamp("created_at"));
        c.setUpdatedAt(rs.getTimestamp("updated_at"));
        return c;
    }
}
