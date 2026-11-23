package com.smartvillage.model;

import java.io.Serializable;
import java.sql.Timestamp;

/**
 * User Entity Model for Smart Village Digital Platform
 */
public class User implements Serializable {
    private static final long serialVersionUID = 1L;

    private int userId;
    private String username;
    private String email;
    private String mobile;
    private String passwordHash;
    private String role; // CITIZEN, ADMIN, SARPANCH, GRAM_SEVAK
    private String status;
    private Timestamp createdAt;

    // Associated Citizen Profile Fields
    private String citizenId;
    private String fullName;
    private String ward;
    private String houseNo;
    private String occupation;
    private String photoUrl;

    public User() {}

    public User(int userId, String username, String email, String mobile, String role) {
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.mobile = mobile;
        this.role = role;
    }

    public int getUserId() { return userId; }
    public void setUserId(int userId) { this.userId = userId; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getMobile() { return mobile; }
    public void setMobile(String mobile) { this.mobile = mobile; }

    public String getPasswordHash() { return passwordHash; }
    public void setPasswordHash(String passwordHash) { this.passwordHash = passwordHash; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public Timestamp getCreatedAt() { return createdAt; }
    public void setCreatedAt(Timestamp createdAt) { this.createdAt = createdAt; }

    public String getCitizenId() { return citizenId; }
    public void setCitizenId(String citizenId) { this.citizenId = citizenId; }

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }

    public String getWard() { return ward; }
    public void setWard(String ward) { this.ward = ward; }

    public String getHouseNo() { return houseNo; }
    public void setHouseNo(String houseNo) { this.houseNo = houseNo; }

    public String getOccupation() { return occupation; }
    public void setOccupation(String occupation) { this.occupation = occupation; }

    public String getPhotoUrl() { return photoUrl; }
    public void setPhotoUrl(String photoUrl) { this.photoUrl = photoUrl; }
}
