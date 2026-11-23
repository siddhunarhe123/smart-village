# Smart Village Digital Platform (स्मार्ट ग्राम डिजिटल मंच)
### College Design Thinking Project | Second Year Artificial Intelligence & Data Science Engineering
**Gram Panchayat Shivneri (Model Smart Village / आदर्श ग्रामपंचायत शिवनेरी)**

---

## 📌 1. Project Overview & Design Thinking Objective

In rural India, villagers face numerous challenges in accessing essential Gram Panchayat services, including long queues, travel delays to taluka/panchayat offices, lack of grievance tracking visibility, and delayed information about government welfare schemes and market rates.

The **Smart Village Digital Platform** is a centralized, transparent, modern, and accessible digital portal designed to connect rural citizens with local administration (Sarpanch, Gram Sevak, and Talathi) and essential community services.

### Key Objectives:
- **Paperless Governance:** Centralize public grievance registration, notice circulars, and certificate issuance.
- **Real-Time Accountability:** Visual status timeline for every submitted public grievance.
- **Economic Empowerment:** Direct farmer-to-consumer marketplace (**Kisan Bazar**) eliminating middlemen.
- **Social Inclusion:** Full trilingual support in **Marathi (मराठी)**, **Hindi (हिंदी)**, and **English**.
- **Digital Literacy Friendly:** Clean, intuitive UI with high-contrast accessibility and prominent emergency hotlines.

---

## 🏛️ 2. Technology Stack

As specified in the College Project PPT:

| Layer | Technology Used | Description |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (ES6+), Bootstrap 5.3.3, Bootstrap Icons | Responsive government design system, trilingual engine, dynamic DOM rendering |
| **Data Visualization** | Chart.js 4.4 | Open data analytics, complaint status charts, solar generation trends |
| **Client Storage Engine** | HTML5 LocalStorage & IndexedDB | Full CRUD state engine allowing 100% offline & instant browser presentation |
| **Backend** | Java Servlets (Java EE / Jakarta EE), JSP | MVC architecture with RESTful controller servlets |
| **Database** | MySQL 8.0+ | Relational schema with primary/foreign keys, audit trails, and indexes |
| **Typography** | Inter, Poppins, Noto Sans Devanagari | Crisp rendering for Marathi and Hindi Devanagari scripts |

---

## 📂 3. Complete Project Directory Structure

```
smart village digital platform/
├── index.html                    # Public Village Portal Homepage (Hero, Stats, Services, Ticker)
├── citizen-login.html            # Citizen Authentication (Login & New Citizen Registration)
├── citizen-dashboard.html        # Comprehensive Citizen Dashboard (12 Modules in 1)
├── admin-login.html              # Official Panchayat Staff Login (Gram Sevak / Sarpanch)
├── admin-dashboard.html          # Administrative Console & Grievance Redressal System
├── complaints.html               # Public Grievance Filing & Live Status Tracker
├── schemes.html                  # Central & State Welfare Schemes Directory
├── notices.html                  # Official Notice Board & Gram Sabha Circulars
├── marketplace.html              # Kisan Bazar (Direct Farmer-Buyer Marketplace)
├── forms.html                    # Official Gram Panchayat Forms & Printable Generator
├── services-agri.html            # Krishi Seva, APMC Mandi Rates & Weather Advisory
├── services-health.html          # Primary Health Centre (PHC) & 108 Ambulance Service
├── services-education.html       # ZP School, Dr. Kalam Digital E-Library & Scholarships
├── village-stats.html            # Village Open Data Analytics & Chart.js Visualizations
│
├── css/
│   ├── style.css                 # Government design system (Tricolor, Navy/Green palette)
│   └── dashboard.css             # Dashboard sidebar, metrics, data tables & digital ID
│
├── js/
│   ├── data.js                   # Seed database & rich sample village records
│   ├── i18n.js                   # Trilingual translation engine (Marathi, Hindi, English)
│   └── app.js                    # Local database engine, session auth & Gram Mitra AI assistant
│
└── backend-java-jsp/             # Complete Java Servlets & JSP Implementation
    ├── WEB-INF/
    │   └── web.xml               # Deployment descriptor, filters & servlet mappings
    ├── src/com/smartvillage/
    │   ├── model/                # User.java, Complaint.java
    │   ├── dao/                  # DBConnection.java, UserDAO.java, ComplaintDAO.java
    │   └── controller/           # LoginServlet.java, ComplaintServlet.java, AdminServlet.java
    ├── database/
    │   └── schema.sql            # MySQL schema DDL script with relations and seed data
    └── README_BACKEND.md         # Eclipse/NetBeans & Apache Tomcat setup instructions
```

---

## 🔑 4. Demo Login Credentials (Ready for Presentation)

Both portals include **1-Click Quick Demo Buttons** on the homepage and login pages for instant evaluation without typing credentials.

### A. Citizen Account:
- **Mobile Number:** `9876543210`
- **Email:** `ramesh@village.in`
- **Password:** `citizen123`
- **Citizen Name:** Ramesh Tukaram Patil (Ward 2, House H-45)

### B. Panchayat Official (Admin) Account:
- **Official Email:** `admin@smartvillage.gov.in`
- **Password:** `admin123`
- **Designation:** Rajesh V. Shinde (Gram Sevak / Village Development Officer)

---

## 📱 5. Feature Breakdown

### 1. Citizen Module (12 Submodules):
1. **My Profile:** Citizen ID card preview with printable digital card, address, ward, and contact information.
2. **Submit New Complaint:** Title, department, description, ward selection, landmark, urgency level, and photo upload.
3. **Track Complaint Status:** Real-time visual timeline (`Submitted` ➔ `Under Review` ➔ `In Progress` ➔ `Resolved` / `Rejected`) with officer remarks.
4. **Government Schemes:** Filter by category, financial benefit summary, eligibility criteria, and document checklist.
5. **Village Notices:** Gram Sabha agenda, drinking water tank cleaning dates, and pulse polio camps.
6. **Agriculture Information:** Real-time weather, Junnar APMC mandi rates with price trends, and seasonal crop guidance.
7. **Health Information:** PHC Shivneri OPD hours, Dr. Snehal Kulkarni contact, free diagnostic tests, and 108 ambulance booking.
8. **Education Information:** ZP Primary School, Dr. APJ Abdul Kalam Digital E-Library, and MahaDBT scholarships.
9. **Local Marketplace:** Direct farmer produce listing, price per unit, and WhatsApp enquiry button.
10. **Download Forms:** Namuna 8 property extract, birth/death forms, NOC, and water connection form with printable official letterhead and stamp.
11. **Emergency Contacts:** Direct tap-to-call links for Sarpanch, Gram Sevak, Police Patil, and Ambulance.
12. **Notifications:** Status alerts on submitted complaints.

### 2. Admin Panel:
- **Overview Dashboard:** Total citizens, pending grievances, resolved issues, and active schemes counters.
- **Complaint Management:** Inspect photo attachments, update status (`Submitted` ➔ `Under Review` ➔ `In Progress` ➔ `Resolved`), assign technician, and write official resolution remarks.
- **Citizen Registry:** Search and review registered village residents.
- **Notice Publisher:** Draft and broadcast urgent circulars to the community.
- **Marketplace Moderation:** Review and delete unwanted product listings.
- **Official Report Generator:** Formatted grievance redressal summary report for Gram Sabha review.

### 3. Planned Future Scope (College PPT Alignment):
- **AI Gram Mitra:** Generative AI chatbot prototype for rural assistance in Marathi, Hindi, and English.
- **GIS Village Map:** Geotagging of village infrastructure, water lines, and ward borders.
- **IoT Smart Water & Solar Monitor:** Real-time sensor gauge simulation for water tank levels and rooftop solar power.

---

## 🚀 6. How to Run

### Instant Presentation (No Server Required):
Simply open `index.html` in Google Chrome, Microsoft Edge, Brave, or any modern web browser. All features—including complaint submission, tracking, notice board, marketplace, admin status updates, and language switching—function immediately using the built-in browser storage engine.

### Production Deployment (Vercel):
This project is pre-configured with `vercel.json` for 1-click deployment on Vercel Edge Network:
1. Push this project to your GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Other** | Root Directory: `./`
5. Click **Deploy**. Vercel will launch your live site with an automatic HTTPS URL.

### Java Servlets & MySQL Backend:
Refer to [`backend-java-jsp/README_BACKEND.md`](file:///c:/Users/User/Downloads/smart%20village%20digital%20platform/backend-java-jsp/README_BACKEND.md) for full instructions on setting up Apache Tomcat and importing `schema.sql` into MySQL.
