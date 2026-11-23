# Smart Village Digital Platform - Java Servlets & JSP Backend Setup Guide

This directory contains the complete Java EE (Jakarta EE compatible) Servlets, JSP, and MySQL database implementation designed for the **Second Year AI & Data Science Engineering Design Thinking Project**.

---

## 1. Project Technology Stack

- **Runtime Environment:** Java SE 8 / 11 / 17 / 21
- **Servlet Container:** Apache Tomcat 9.0 / 10.1
- **Architecture Pattern:** MVC (Model-View-Controller)
  - **Model:** Java Beans (`com.smartvillage.model.*`)
  - **View:** JSP & Bootstrap 5 Frontend (`/jsp/*` and root HTML/CSS/JS)
  - **Controller:** Java Servlets (`com.smartvillage.controller.*`)
  - **DAO Layer:** JDBC Data Access Objects (`com.smartvillage.dao.*`)
- **Database:** MySQL 8.0+

---

## 2. Database Setup in MySQL

1. Open **MySQL Workbench** or **phpMyAdmin** or MySQL CLI.
2. Execute the DDL script located at:
   ```sql
   source backend-java-jsp/database/schema.sql;
   ```
3. This creates:
   - Database: `smart_village_db`
   - Tables: `users`, `citizens`, `admins`, `complaints`, `complaint_updates`, `schemes`, `notices`, `marketplace_products`, `documents`, `emergency_contacts`.
   - Seed sample records for immediate demo testing.

4. If your MySQL credentials are not `root` / `root`, update them in:
   `backend-java-jsp/src/com/smartvillage/dao/DBConnection.java`

---

## 3. Running in Eclipse IDE for Enterprise Java Developers

1. **Open Eclipse** -> `File` -> `Import...` -> `Existing Projects into Workspace` or `General` -> `Projects from Folder or Repository`.
2. Select the `smart village digital platform` directory.
3. Right-click the project -> `Properties` -> `Targeted Runtimes` -> Check **Apache Tomcat v9.0** (or v10.0).
4. Add the **MySQL Connector/J JAR** (`mysql-connector-j-8.x.jar`) to `WEB-INF/lib` or Build Path.
5. Right-click project -> `Run As` -> `Run on Server` -> Select **Apache Tomcat**.
6. Access the application in your browser at:
   `http://localhost:8080/smart_village_digital_platform/`

---

## 4. Default Demo Credentials

| Role | Username / Mobile / Email | Password | Access Level |
| :--- | :--- | :--- | :--- |
| **Citizen** | `9876543210` / `ramesh@village.in` | `citizen123` | Citizen Dashboard (12 Modules) |
| **Admin** | `admin@smartvillage.gov.in` | `admin123` | Full Panchayat Console & Status Updates |
| **Sarpanch** | `sarpanch@smartvillage.gov.in` | `admin123` | Council Head Review |

---

## 5. Dual-Mode Operation Feature

- **Standalone Mode (Instant Presentation):** Double-click `index.html` in any modern browser. The application runs with a full client-side LocalStorage DB engine supporting live complaints, status updates, trilingual translation, and admin controls without requiring server setup.
- **Enterprise Server Mode:** Run on Apache Tomcat with MySQL using the Java Servlets and schema provided in this directory.
