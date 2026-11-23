package com.smartvillage.model;

import java.io.Serializable;
import java.sql.Timestamp;

/**
 * Complaint Entity Model
 */
public class Complaint implements Serializable {
    private static final long serialVersionUID = 1L;

    private String complaintId;
    private String citizenId;
    private String citizenName;
    private String citizenMobile;
    private String category;
    private String title;
    private String description;
    private String ward;
    private String landmark;
    private String photoUrl;
    private String priority;
    private String status; // Submitted, Under Review, In Progress, Resolved, Rejected
    private String assignedTo;
    private String adminRemarks;
    private Timestamp createdAt;
    private Timestamp updatedAt;

    public Complaint() {}

    public String getComplaintId() { return complaintId; }
    public void setComplaintId(String complaintId) { this.complaintId = complaintId; }

    public String getCitizenId() { return citizenId; }
    public void setCitizenId(String citizenId) { this.citizenId = citizenId; }

    public String getCitizenName() { return citizenName; }
    public void setCitizenName(String citizenName) { this.citizenName = citizenName; }

    public String getCitizenMobile() { return citizenMobile; }
    public void setCitizenMobile(String citizenMobile) { this.citizenMobile = citizenMobile; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getWard() { return ward; }
    public void setWard(String ward) { this.ward = ward; }

    public String getLandmark() { return landmark; }
    public void setLandmark(String landmark) { this.landmark = landmark; }

    public String getPhotoUrl() { return photoUrl; }
    public void setPhotoUrl(String photoUrl) { this.photoUrl = photoUrl; }

    public String getPriority() { return priority; }
    public void setPriority(String priority) { this.priority = priority; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getAssignedTo() { return assignedTo; }
    public void setAssignedTo(String assignedTo) { this.assignedTo = assignedTo; }

    public String getAdminRemarks() { return adminRemarks; }
    public void setAdminRemarks(String adminRemarks) { this.adminRemarks = adminRemarks; }

    public Timestamp getCreatedAt() { return createdAt; }
    public void setCreatedAt(Timestamp createdAt) { this.createdAt = createdAt; }

    public Timestamp getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(Timestamp updatedAt) { this.updatedAt = updatedAt; }
}
