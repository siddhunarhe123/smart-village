-- ============================================================================
-- SMART VILLAGE DIGITAL PLATFORM (ग्रामपंचायत शिवनेरी)
-- Database Architecture & MySQL DDL Script
-- Target RDBMS: MySQL 8.0+ / MariaDB 10.4+
-- ============================================================================

CREATE DATABASE IF NOT EXISTS smart_village_db 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE smart_village_db;

-- ----------------------------------------------------------------------------
-- 1. TABLE: USERS (Master Authentication Table with Role-Based Access)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(150) NOT NULL UNIQUE,
    mobile VARCHAR(15) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('CITIZEN', 'ADMIN', 'SARPANCH', 'GRAM_SEVAK') NOT NULL DEFAULT 'CITIZEN',
    status ENUM('ACTIVE', 'SUSPENDED', 'PENDING_VERIFICATION') NOT NULL DEFAULT 'ACTIVE',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_user_role (role),
    INDEX idx_user_mobile (mobile)
) ENGINE=InnoDB;

-- ----------------------------------------------------------------------------
-- 2. TABLE: CITIZENS (Detailed Demographics Profile)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS citizens (
    citizen_id VARCHAR(20) PRIMARY KEY, -- e.g. CIT-001
    user_id INT NOT NULL UNIQUE,
    full_name VARCHAR(150) NOT NULL,
    aadhar_hash VARCHAR(20) NOT NULL,
    ward VARCHAR(50) NOT NULL,
    house_no VARCHAR(20) NOT NULL,
    occupation VARCHAR(100) DEFAULT 'Farmer / शेतकरी',
    photo_url VARCHAR(500),
    is_verified BOOLEAN DEFAULT TRUE,
    registered_on DATE NOT NULL,
    CONSTRAINT fk_citizen_user FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    INDEX idx_citizen_ward (ward)
) ENGINE=InnoDB;

-- ----------------------------------------------------------------------------
-- 3. TABLE: ADMINS (Panchayat Administrative Staff)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS admins (
    admin_id VARCHAR(20) PRIMARY KEY, -- e.g. ADM-001
    user_id INT NOT NULL UNIQUE,
    full_name VARCHAR(150) NOT NULL,
    designation VARCHAR(100) NOT NULL,
    department VARCHAR(100) NOT NULL,
    CONSTRAINT fk_admin_user FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ----------------------------------------------------------------------------
-- 4. TABLE: COMPLAINTS (Public Grievance Redressal)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS complaints (
    complaint_id VARCHAR(30) PRIMARY KEY, -- e.g. CMP-2026-1001
    citizen_id VARCHAR(20) NOT NULL,
    category ENUM('Water Supply', 'Street Lights', 'Sanitation & Drainage', 'Roads & Infrastructure', 'Health & Hygiene', 'Other') NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    ward VARCHAR(50) NOT NULL,
    landmark VARCHAR(150),
    photo_url VARCHAR(500),
    priority ENUM('Low', 'Medium', 'High', 'Critical') DEFAULT 'Medium',
    status ENUM('Submitted', 'Under Review', 'In Progress', 'Resolved', 'Rejected') DEFAULT 'Submitted',
    assigned_to VARCHAR(150) DEFAULT 'Under Review by Gram Sevak',
    admin_remarks TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_complaint_citizen FOREIGN KEY (citizen_id) REFERENCES citizens(citizen_id) ON DELETE CASCADE,
    INDEX idx_complaint_status (status),
    INDEX idx_complaint_category (category),
    INDEX idx_complaint_ward (ward)
) ENGINE=InnoDB;

-- ----------------------------------------------------------------------------
-- 5. TABLE: COMPLAINT_UPDATES (Audit Log & Visual Timeline Tracking)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS complaint_updates (
    update_id INT AUTO_INCREMENT PRIMARY KEY,
    complaint_id VARCHAR(30) NOT NULL,
    status_changed_to ENUM('Submitted', 'Under Review', 'In Progress', 'Resolved', 'Rejected') NOT NULL,
    officer_remarks TEXT,
    updated_by VARCHAR(100) NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_update_complaint FOREIGN KEY (complaint_id) REFERENCES complaints(complaint_id) ON DELETE CASCADE,
    INDEX idx_update_complaint_id (complaint_id)
) ENGINE=InnoDB;

-- ----------------------------------------------------------------------------
-- 6. TABLE: SCHEMES (Government Welfare Schemes Directory)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS schemes (
    scheme_id VARCHAR(20) PRIMARY KEY, -- e.g. SCH-001
    category VARCHAR(100) NOT NULL,
    title_en VARCHAR(200) NOT NULL,
    title_mr VARCHAR(250) NOT NULL,
    department VARCHAR(150) NOT NULL,
    financial_benefit VARCHAR(255) NOT NULL,
    description_mr TEXT NOT NULL,
    eligibility_criteria TEXT NOT NULL,
    required_documents TEXT NOT NULL,
    application_process TEXT NOT NULL,
    official_link VARCHAR(300),
    deadline VARCHAR(100) DEFAULT 'Ongoing',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- ----------------------------------------------------------------------------
-- 7. TABLE: NOTICES (Village Announcements & Gram Sabha Circulars)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS notices (
    notice_id VARCHAR(30) PRIMARY KEY, -- e.g. NOT-2026-001
    category VARCHAR(50) NOT NULL,
    priority ENUM('Normal', 'Important', 'Urgent') DEFAULT 'Normal',
    title_mr VARCHAR(255) NOT NULL,
    title_en VARCHAR(255) NOT NULL,
    content_mr TEXT NOT NULL,
    content_en TEXT,
    issued_by VARCHAR(150) NOT NULL,
    attachment_url VARCHAR(300),
    published_date DATE NOT NULL,
    valid_till DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- ----------------------------------------------------------------------------
-- 8. TABLE: MARKETPLACE_PRODUCTS (Kisan Bazar Listings)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS marketplace_products (
    product_id VARCHAR(20) PRIMARY KEY, -- e.g. PRD-001
    seller_citizen_id VARCHAR(20),
    seller_name VARCHAR(150) NOT NULL,
    seller_phone VARCHAR(20) NOT NULL,
    seller_ward VARCHAR(50) NOT NULL,
    product_name VARCHAR(200) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    unit VARCHAR(50) NOT NULL,
    quantity_available VARCHAR(100),
    description TEXT,
    image_url VARCHAR(500),
    is_verified BOOLEAN DEFAULT TRUE,
    is_active BOOLEAN DEFAULT TRUE,
    listed_on DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- ----------------------------------------------------------------------------
-- 9. TABLE: DOCUMENTS (Official Gram Panchayat Forms & Circulars)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS documents (
    document_id VARCHAR(20) PRIMARY KEY,
    code VARCHAR(30) NOT NULL,
    title VARCHAR(200) NOT NULL,
    department VARCHAR(100) NOT NULL,
    fee_amount DECIMAL(8,2) DEFAULT 0.00,
    processing_time VARCHAR(50),
    required_docs TEXT,
    description TEXT
) ENGINE=InnoDB;

-- ----------------------------------------------------------------------------
-- 10. TABLE: EMERGENCY_CONTACTS
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS emergency_contacts (
    contact_id INT AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(100) NOT NULL,
    officer_name VARCHAR(150) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    availability_timing VARCHAR(100) DEFAULT '24x7'
) ENGINE=InnoDB;

-- ----------------------------------------------------------------------------
-- 11. SAMPLE DATA INSERTION (Matches Project Demo Data)
-- ----------------------------------------------------------------------------

-- Users
INSERT INTO users (user_id, username, email, mobile, password_hash, role) VALUES
(1, 'ramesh_patil', 'ramesh@village.in', '9876543210', 'citizen123', 'CITIZEN'),
(2, 'anita_deshmukh', 'anita@village.in', '9822334455', 'citizen123', 'CITIZEN'),
(3, 'rajesh_shinde', 'admin@smartvillage.gov.in', '9422001122', 'admin123', 'GRAM_SEVAK'),
(4, 'sunita_patil', 'sarpanch@smartvillage.gov.in', '9822556677', 'admin123', 'SARPANCH');

-- Citizens
INSERT INTO citizens (citizen_id, user_id, full_name, aadhar_hash, ward, house_no, occupation, photo_url, registered_on) VALUES
('CIT-001', 1, 'Ramesh Tukaram Patil', 'XXXX-XXXX-4589', 'Ward 2 (Kisan Galli)', 'H-45', 'Farmer / शेतकरी', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150', '2026-01-15'),
('CIT-002', 2, 'Anita Santosh Deshmukh', 'XXXX-XXXX-8912', 'Ward 1 (Grampanchayat Galli)', 'H-12', 'Bachat Gat Leader', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150', '2026-02-10');

-- Admins
INSERT INTO admins (admin_id, user_id, full_name, designation, department) VALUES
('ADM-001', 3, 'Rajesh V. Shinde', 'Gram Sevak / VDO', 'Rural Administration'),
('ADM-002', 4, 'Smt. Sunita A. Patil', 'Sarpanch', 'Gram Panchayat Council');

-- Complaints
INSERT INTO complaints (complaint_id, citizen_id, category, title, description, ward, landmark, photo_url, priority, status, assigned_to, admin_remarks) VALUES
('CMP-2026-1001', 'CIT-001', 'Water Supply', 'वॉर्ड २ पाण्याच्या टाकीजवळील पाईपलाईन गळती', 'पिण्याच्या पाण्याची मुख्य पाईपलाईन फुटल्याने पाणी गळती होत आहे.', 'Ward 2 (Kisan Galli)', 'Opp. Vitthal Temple', 'https://images.unsplash.com/photo-1584467735815-f778f274e296?w=600', 'High', 'In Progress', 'Kailash Jadhav (Plumber)', 'New pipeline allocated; repair in progress.'),
('CMP-2026-1002', 'CIT-002', 'Street Lights', 'अंगणवाडी समोरील सोलर स्ट्रीट लाईट बंद आहे', 'रात्री ८ नंतर दिवा बंद पडतो. बॅटरी बदलण्याची आवश्यकता आहे.', 'Ward 1 (Grampanchayat Galli)', 'Near Anganwadi 1', 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600', 'Medium', 'Resolved', 'Santosh Mhatre (MSEB)', 'Battery and inverter repaired. Verified working.');

-- Complaint Updates
INSERT INTO complaint_updates (complaint_id, status_changed_to, officer_remarks, updated_by) VALUES
('CMP-2026-1001', 'Submitted', 'Grievance lodged online.', 'Ramesh Patil'),
('CMP-2026-1001', 'Under Review', 'Verified by Panchayat Secretary.', 'Rajesh Shinde (Gram Sevak)'),
('CMP-2026-1001', 'In Progress', 'Work order issued to maintenance plumber.', 'Rajesh Shinde (Gram Sevak)');
