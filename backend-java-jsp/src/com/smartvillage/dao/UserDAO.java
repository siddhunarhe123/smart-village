package com.smartvillage.dao;

import com.smartvillage.model.User;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Data Access Object for User & Citizen Authentication
 */
public class UserDAO {

    public User authenticate(String identifier, String password) {
        String sql = "SELECT u.user_id, u.username, u.email, u.mobile, u.role, u.status, " +
                     "c.citizen_id, c.full_name, c.ward, c.house_no, c.occupation, c.photo_url " +
                     "FROM users u " +
                     "LEFT JOIN citizens c ON u.user_id = c.user_id " +
                     "WHERE (u.email = ? OR u.mobile = ?) AND u.password_hash = ? AND u.status = 'ACTIVE'";

        try (Connection conn = DBConnection.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, identifier);
            ps.setString(2, identifier);
            ps.setString(3, password);

            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    User u = new User();
                    u.setUserId(rs.getInt("user_id"));
                    u.setUsername(rs.getString("username"));
                    u.setEmail(rs.getString("email"));
                    u.setMobile(rs.getString("mobile"));
                    u.setRole(rs.getString("role"));
                    u.setStatus(rs.getString("status"));
                    u.setCitizenId(rs.getString("citizen_id"));
                    u.setFullName(rs.getString("full_name"));
                    u.setWard(rs.getString("ward"));
                    u.setHouseNo(rs.getString("house_no"));
                    u.setOccupation(rs.getString("occupation"));
                    u.setPhotoUrl(rs.getString("photo_url"));
                    return u;
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    public boolean registerCitizen(User user, String password, String ward, String houseNo, String occupation) {
        String insertUserSql = "INSERT INTO users (username, email, mobile, password_hash, role) VALUES (?, ?, ?, ?, 'CITIZEN')";
        String insertCitizenSql = "INSERT INTO citizens (citizen_id, user_id, full_name, aadhar_hash, ward, house_no, occupation, registered_on) VALUES (?, ?, ?, ?, ?, ?, ?, CURDATE())";

        Connection conn = null;
        try {
            conn = DBConnection.getConnection();
            conn.setAutoCommit(false);

            // 1. Insert into users
            int newUserId = 0;
            try (PreparedStatement psUser = conn.prepareStatement(insertUserSql, PreparedStatement.RETURN_GENERATED_KEYS)) {
                psUser.setString(1, user.getUsername());
                psUser.setString(2, user.getEmail());
                psUser.setString(3, user.getMobile());
                psUser.setString(4, password);
                psUser.executeUpdate();

                try (ResultSet keys = psUser.getGeneratedKeys()) {
                    if (keys.next()) {
                        newUserId = keys.getInt(1);
                    }
                }
            }

            // 2. Insert into citizens
            String newCitizenId = "CIT-" + System.currentTimeMillis() % 10000;
            try (PreparedStatement psCit = conn.prepareStatement(insertCitizenSql)) {
                psCit.setString(1, newCitizenId);
                psCit.setInt(2, newUserId);
                psCit.setString(3, user.getFullName());
                psCit.setString(4, "XXXX-XXXX-" + (1000 + (int)(Math.random()*9000)));
                psCit.setString(5, ward);
                psCit.setString(6, houseNo);
                psCit.setString(7, occupation);
                psCit.executeUpdate();
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
}
