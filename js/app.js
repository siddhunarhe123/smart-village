/**
 * SMART VILLAGE DIGITAL PLATFORM
 * Core Application Engine & Local Data Store
 */

const DB_STORAGE_KEY = "smartvillage_db_v3"; // Version bump to refresh seed data with matching images
const SESSION_USER_KEY = "smartvillage_user";
const SESSION_ROLE_KEY = "smartvillage_role";

/**
 * Intelligent Image Resolver:
 * Directly maps any product title (in English, Marathi, or Hindi) to a 100% accurate, high-definition image.
 */
window.resolveProductImage = function (title, category, fallbackUrl) {
  const t = (title || "").toLowerCase();

  // 1. Laptop / Computer / IT Equipment
  if (t.includes("laptop") || t.includes("लॅपटॉप") || t.includes("कंप्यूटर") || t.includes("संगणक") || t.includes("computer") || t.includes("notebook") || t.includes("core i")) {
    return "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=80"; // Laptop on wooden desk
  }

  // 2. Vegetables / Fresh Greens / Sabzi / Bhaji
  if (t.includes("vegetable") || t.includes("भाजी") || t.includes("सब्जी") || t.includes("greens") || t.includes("पालक") || t.includes("मेथी") || t.includes("वांगी") || t.includes("दोडका") || t.includes("भेंडी")) {
    return "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80"; // Fresh mixed vegetables basket
  }

  // 3. Mango / Hapus / Alphonso
  if (t.includes("mango") || t.includes("हापूस") || t.includes("आंबा") || t.includes("आम") || t.includes("alphonso")) {
    return "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&auto=format&fit=crop&q=80"; // Fresh Alphonso mangoes
  }

  // 4. Ghee / Desi Cow Butter / Bilona
  if (t.includes("ghee") || t.includes("तूप") || t.includes("घी") || t.includes("bilona") || t.includes("butter") || t.includes("लोणी") || t.includes("माखन")) {
    return "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?w=600&auto=format&fit=crop&q=80"; // Traditional cow ghee jar
  }

  // 5. Turmeric / Haldi / Curcumin
  if (t.includes("turmeric") || t.includes("हळद") || t.includes("हल्दी") || t.includes("curcumin")) {
    return "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&auto=format&fit=crop&q=80"; // Natural turmeric powder and roots
  }

  // 6. Jaggery / Gul / Gud
  if (t.includes("jaggery") || t.includes("गूळ") || t.includes("गुळ") || t.includes("गुड़") || t.includes("काकवी")) {
    return "https://images.unsplash.com/photo-1601039641847-7857b994d704?w=600&auto=format&fit=crop&q=80"; // Organic solid jaggery blocks
  }

  // 7. Tomato / Tomatoes
  if (t.includes("tomato") || t.includes("टोमॅटो") || t.includes("टमाटर")) {
    return "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&auto=format&fit=crop&q=80"; // Vibrant farm red tomatoes
  }

  // 8. Onion / Onions
  if (t.includes("onion") || t.includes("कांदा") || t.includes("प्याज")) {
    return "https://images.unsplash.com/photo-1508747703725-719777637510?w=600&auto=format&fit=crop&q=80"; // Farm fresh red onions
  }

  // 9. Honey / Madh / Shahad
  if (t.includes("honey") || t.includes("मध") || t.includes("शहद")) {
    return "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&auto=format&fit=crop&q=80"; // Natural wild honey jar
  }

  // 10. Rice / Paddy
  if (t.includes("rice") || t.includes("तांदूळ") || t.includes("चावल") || t.includes("धान") || t.includes("kolam") || t.includes("indrayani") || t.includes("इंद्रायणी")) {
    return "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80"; // Organic farm rice
  }

  // 11. Wheat
  if (t.includes("wheat") || t.includes("गहू") || t.includes("गेहूं") || t.includes("flour") || t.includes("आटा")) {
    return "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&auto=format&fit=crop&q=80"; // Golden wheat ears & grain
  }

  // 12. Milk / Dairy
  if (t.includes("milk") || t.includes("दूध") || t.includes("dairy") || t.includes("paneer") || t.includes("पनीर")) {
    return "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&auto=format&fit=crop&q=80"; // Pure milk jug & pitcher
  }

  // 13. Bamboo basket / Handicrafts
  if (t.includes("basket") || t.includes("बांबू") || t.includes("परडी") || t.includes("टोकरी") || t.includes("handicraft") || t.includes("हस्तकला") || t.includes("craft")) {
    return "https://images.unsplash.com/photo-1590736969955-71cc94801759?w=600&auto=format&fit=crop&q=80"; // Woven handmade bamboo craft
  }

  // 14. Mobile / Smartphone
  if (t.includes("mobile") || t.includes("smartphone") || t.includes("फोन") || t.includes("मोबाईल") || t.includes("phone")) {
    return "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80"; // Modern smartphone
  }

  // 15. Tractor / Farm tools / Pump
  if (t.includes("tractor") || t.includes("ट्रॅक्टर") || t.includes("tools") || t.includes("औजारे") || t.includes("pump") || t.includes("पंप")) {
    return "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=600&auto=format&fit=crop&q=80"; // Agricultural tractor
  }

  // 16. Fertilizer / Vermicompost
  if (t.includes("fertilizer") || t.includes("खत") || t.includes("compost") || t.includes("गांडूळखत") || t.includes("खाद")) {
    return "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=600&auto=format&fit=crop&q=80"; // Organic fertilizer / compost
  }

  // 17. Eggs / Poultry
  if (t.includes("egg") || t.includes("अंडी") || t.includes("अंडे") || t.includes("poultry") || t.includes("कुक्कुटपालन")) {
    return "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=600&auto=format&fit=crop&q=80"; // Organic brown eggs
  }

  // 18. Seeds
  if (t.includes("seed") || t.includes("बियाणे") || t.includes("बीज")) {
    return "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&auto=format&fit=crop&q=80"; // High-yield farm seeds
  }

  // 19. Fruits (Guava, Pomegranate, Banana, etc.)
  if (t.includes("fruit") || t.includes("फळे") || t.includes("फल") || t.includes("पेरू") || t.includes("डाळिंब") || t.includes("केळी") || t.includes("apple") || t.includes("banana")) {
    return "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&auto=format&fit=crop&q=80"; // Fresh assorted fruits
  }

  // Category fallback
  if (category) {
    const c = category.toLowerCase();
    if (c.includes("fruit")) return "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&auto=format&fit=crop&q=80";
    if (c.includes("vegetable")) return "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80";
    if (c.includes("dairy")) return "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?w=600&auto=format&fit=crop&q=80";
    if (c.includes("handicraft")) return "https://images.unsplash.com/photo-1590736969955-71cc94801759?w=600&auto=format&fit=crop&q=80";
    if (c.includes("electronic")) return "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=80";
  }

  return fallbackUrl || "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80";
};

class SmartVillageDB {
  constructor() {
    this.initDatabase();
  }

  initDatabase() {
    const existing = localStorage.getItem(DB_STORAGE_KEY);
    if (!existing) {
      if (typeof SEED_DATA !== "undefined") {
        localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(SEED_DATA));
      }
    }
  }

  getDB() {
    try {
      const data = localStorage.getItem(DB_STORAGE_KEY);
      return data ? JSON.parse(data) : (typeof SEED_DATA !== "undefined" ? SEED_DATA : {});
    } catch (e) {
      return typeof SEED_DATA !== "undefined" ? SEED_DATA : {};
    }
  }

  saveDB(db) {
    try {
      localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(db));
    } catch (e) {
      console.error("Error saving database", e);
    }
  }

  // --- Auth & Session ---
  getCurrentUser() {
    try {
      const userStr = localStorage.getItem(SESSION_USER_KEY);
      const role = localStorage.getItem(SESSION_ROLE_KEY);
      return userStr ? { ...JSON.parse(userStr), role } : null;
    } catch (e) {
      return null;
    }
  }

  setCurrentUser(user, role) {
    localStorage.setItem(SESSION_USER_KEY, JSON.stringify(user));
    localStorage.setItem(SESSION_ROLE_KEY, role);
  }

  logout() {
    localStorage.removeItem(SESSION_USER_KEY);
    localStorage.removeItem(SESSION_ROLE_KEY);
    window.location.href = "index.html";
  }

  authenticateCitizen(identifier, password) {
    const db = this.getDB();
    const citizens = db.citizens || [];
    const cleanId = identifier.trim().toLowerCase();
    const found = citizens.find(
      (c) =>
        (c.email.toLowerCase() === cleanId || c.mobile === cleanId) &&
        c.password === password
    );
    if (found) {
      this.setCurrentUser(found, "citizen");
      return { success: true, user: found };
    }
    return { success: false, message: "Invalid Mobile/Email or Password." };
  }

  authenticateAdmin(email, password) {
    const db = this.getDB();
    const admins = db.admins || [];
    const cleanEmail = email.trim().toLowerCase();
    const found = admins.find(
      (a) => a.email.toLowerCase() === cleanEmail && a.password === password
    );
    if (found) {
      this.setCurrentUser(found, "admin");
      return { success: true, user: found };
    }
    return { success: false, message: "Invalid Admin Credentials." };
  }

  registerCitizen(citizenData) {
    const db = this.getDB();
    const citizens = db.citizens || [];

    const duplicate = citizens.find(
      (c) => c.mobile === citizenData.mobile || c.email === citizenData.email
    );
    if (duplicate) {
      return { success: false, message: "A citizen with this mobile or email already exists." };
    }

    const newId = `CIT-00${citizens.length + 1}`;
    const newCitizen = {
      id: newId,
      name: citizenData.name,
      email: citizenData.email,
      mobile: citizenData.mobile,
      aadhar: citizenData.aadhar || "XXXX-XXXX-" + Math.floor(1000 + Math.random() * 9000),
      password: citizenData.password,
      ward: citizenData.ward,
      houseNo: citizenData.houseNo || "H-" + Math.floor(10 + Math.random() * 90),
      occupation: citizenData.occupation || "Resident",
      photo: citizenData.photo || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
      registeredOn: new Date().toISOString().split("T")[0],
      status: "Active"
    };

    citizens.push(newCitizen);
    db.citizens = citizens;
    this.saveDB(db);

    this.setCurrentUser(newCitizen, "citizen");
    return { success: true, user: newCitizen };
  }

  // --- Complaints Management ---
  getComplaints(filter = {}) {
    const db = this.getDB();
    let list = db.complaints || [];

    if (filter.citizenId) {
      list = list.filter((c) => c.citizenId === filter.citizenId);
    }
    if (filter.category && filter.category !== "all") {
      list = list.filter((c) => c.category.toLowerCase() === filter.category.toLowerCase());
    }
    if (filter.status && filter.status !== "all") {
      list = list.filter((c) => c.status.toLowerCase() === filter.status.toLowerCase());
    }
    if (filter.search) {
      const q = filter.search.toLowerCase();
      list = list.filter(
        (c) =>
          c.id.toLowerCase().includes(q) ||
          (c.titleEn && c.titleEn.toLowerCase().includes(q)) ||
          (c.titleMr && c.titleMr.toLowerCase().includes(q)) ||
          c.ward.toLowerCase().includes(q)
      );
    }
    return list;
  }

  getComplaintById(id) {
    const db = this.getDB();
    const list = db.complaints || [];
    return list.find((c) => c.id.toLowerCase() === id.trim().toLowerCase());
  }

  addComplaint(data) {
    const db = this.getDB();
    const list = db.complaints || [];

    const dateStr = new Date();
    const count = list.length + 1001;
    const newId = `CMP-2026-${count}`;

    const formattedTime = dateStr.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    }) + ", " + dateStr.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });

    const newComplaint = {
      id: newId,
      citizenId: data.citizenId || "CIT-GUEST",
      citizenName: data.citizenName || "Guest Villager",
      citizenMobile: data.citizenMobile || "9876543210",
      category: data.category,
      titleEn: data.title,
      titleMr: data.title,
      titleHi: data.title,
      descriptionEn: data.description,
      descriptionMr: data.description,
      descriptionHi: data.description,
      ward: data.ward || "Ward 1",
      landmark: data.landmark || "Village Center",
      photo: data.photo || "https://images.unsplash.com/photo-1584467735815-f778f274e296?w=600&auto=format&fit=crop&q=80",
      status: "Submitted",
      priority: data.priority || "Medium",
      submittedAt: formattedTime,
      updatedAt: formattedTime,
      assignedTo: "Under Review by Gram Sevak",
      adminRemarks: "Grievance received via Smart Village portal. Queued for verification.",
      timeline: [
        {
          status: "Submitted",
          time: formattedTime,
          note: "Grievance lodged online with system timestamp."
        }
      ]
    };

    list.unshift(newComplaint);
    db.complaints = list;
    this.saveDB(db);

    return newComplaint;
  }

  updateComplaintStatus(id, newStatus, adminRemarks, assignedTo) {
    const db = this.getDB();
    const list = db.complaints || [];
    const index = list.findIndex((c) => c.id === id);

    if (index === -1) return { success: false, message: "Complaint not found" };

    const c = list[index];
    c.status = newStatus;
    if (adminRemarks) c.adminRemarks = adminRemarks;
    if (assignedTo) c.assignedTo = assignedTo;

    const formattedTime = new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    }) + ", " + new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });

    c.updatedAt = formattedTime;

    if (!c.timeline) c.timeline = [];
    c.timeline.push({
      status: newStatus,
      time: formattedTime,
      note: adminRemarks || `Status updated to ${newStatus} by Panchayat Officer.`
    });

    list[index] = c;
    db.complaints = list;
    this.saveDB(db);

    return { success: true, complaint: c };
  }

  // --- Notices ---
  getNotices() {
    const db = this.getDB();
    return db.notices || [];
  }

  addNotice(noticeData) {
    const db = this.getDB();
    const list = db.notices || [];
    const newId = `NOT-2026-00${list.length + 1}`;

    const newNotice = {
      id: newId,
      category: noticeData.category || "General",
      priority: noticeData.priority || "Normal",
      date: new Date().toISOString().split("T")[0],
      validTill: noticeData.validTill || "2026-12-31",
      titleEn: noticeData.titleEn || noticeData.title,
      titleMr: noticeData.titleMr || noticeData.title,
      titleHi: noticeData.titleHi || noticeData.title,
      contentEn: noticeData.contentEn || noticeData.content,
      contentMr: noticeData.contentMr || noticeData.content,
      contentHi: noticeData.contentHi || noticeData.content,
      issuedBy: noticeData.issuedBy || "Gram Panchayat Shivneri",
      attachment: noticeData.attachment || "Panchayat_Circular.pdf"
    };

    list.unshift(newNotice);
    db.notices = list;
    this.saveDB(db);
    return newNotice;
  }

  deleteNotice(id) {
    const db = this.getDB();
    let list = db.notices || [];
    list = list.filter((n) => n.id !== id);
    db.notices = list;
    this.saveDB(db);
    return true;
  }

  // --- Marketplace ---
  getProducts(filter = {}) {
    const db = this.getDB();
    let list = db.marketplace || [];

    // Ensure every single product image matches its title with resolveProductImage
    list.forEach((p) => {
      p.image = window.resolveProductImage(p.productNameEn || p.productNameMr, p.category, p.image);
    });

    if (filter.category && filter.category !== "all") {
      list = list.filter((p) => p.category.toLowerCase() === filter.category.toLowerCase());
    }
    if (filter.search) {
      const q = filter.search.toLowerCase();
      list = list.filter(
        (p) =>
          (p.productNameEn && p.productNameEn.toLowerCase().includes(q)) ||
          (p.productNameMr && p.productNameMr.toLowerCase().includes(q)) ||
          (p.productNameHi && p.productNameHi.toLowerCase().includes(q)) ||
          p.sellerName.toLowerCase().includes(q)
      );
    }
    return list;
  }

  addProduct(productData) {
    const db = this.getDB();
    const list = db.marketplace || [];
    const newId = `PRD-00${list.length + 1}`;

    // Resolve accurate image directly based on the user's entered title
    const accurateImage = window.resolveProductImage(
      productData.productName,
      productData.category,
      productData.image
    );

    const newProduct = {
      id: newId,
      sellerName: productData.sellerName,
      sellerPhone: productData.sellerPhone,
      sellerWard: productData.sellerWard || "Ward 1",
      productNameEn: productData.productName,
      productNameMr: productData.productName,
      productNameHi: productData.productName,
      category: productData.category || "Farm Produce",
      price: Number(productData.price) || 100,
      unit: productData.unit || "per kg",
      quantityAvailable: productData.quantityAvailable || "In Stock",
      descriptionEn: productData.description,
      descriptionMr: productData.description,
      descriptionHi: productData.description,
      image: accurateImage,
      verifiedFarmer: true,
      listedOn: new Date().toISOString().split("T")[0]
    };

    list.unshift(newProduct);
    db.marketplace = list;
    this.saveDB(db);
    return newProduct;
  }

  deleteProduct(id) {
    const db = this.getDB();
    let list = db.marketplace || [];
    list = list.filter((p) => p.id !== id);
    db.marketplace = list;
    this.saveDB(db);
    return true;
  }

  // --- Schemes & Forms & Contacts ---
  getSchemes(category = "all") {
    const db = this.getDB();
    const list = db.schemes || [];
    if (category && category !== "all") {
      return list.filter((s) => s.category.toLowerCase() === category.toLowerCase());
    }
    return list;
  }

  getForms() {
    const db = this.getDB();
    return db.forms || [];
  }

  getEmergencyContacts() {
    const db = this.getDB();
    return db.emergencyContacts || [];
  }
}

// Global DB instance
window.villageDB = new SmartVillageDB();

// Global Utility Helpers
window.villageApp = {
  showToast(message, type = "success", title = "") {
    let container = document.getElementById("toastContainer");
    if (!container) {
      container = document.createElement("div");
      container.id = "toastContainer";
      container.className = "toast-container position-fixed bottom-0 end-0 p-3";
      container.style.zIndex = "9999";
      document.body.appendChild(container);
    }

    const toastEl = document.createElement("div");
    const bgClass =
      type === "success"
        ? "bg-success text-white"
        : type === "danger" || type === "error"
          ? "bg-danger text-white"
          : type === "warning"
            ? "bg-warning text-dark"
            : "bg-primary text-white";

    const id = "toast_" + Date.now();
    toastEl.id = id;
    toastEl.className = `toast align-items-center ${bgClass} border-0 shadow-lg`;
    toastEl.setAttribute("role", "alert");
    toastEl.setAttribute("aria-live", "assertive");
    toastEl.setAttribute("aria-atomic", "true");

    toastEl.innerHTML = `
      <div class="d-flex">
        <div class="toast-body">
          ${title ? `<strong>${title}</strong><br>` : ""}
          ${message}
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    `;

    container.appendChild(toastEl);
    if (typeof bootstrap !== "undefined" && bootstrap.Toast) {
      const bsToast = new bootstrap.Toast(toastEl, { delay: 4000 });
      bsToast.show();
      toastEl.addEventListener("hidden.bs.toast", () => toastEl.remove());
    } else {
      setTimeout(() => toastEl.remove(), 4000);
    }
  },

  quickCitizenLogin() {
    const result = window.villageDB.authenticateCitizen("9876543210", "citizen123");
    if (result.success) {
      window.location.href = "citizen-dashboard.html";
    }
  },

  quickAdminLogin() {
    const result = window.villageDB.authenticateAdmin("admin@smartvillage.gov.in", "admin123");
    if (result.success) {
      window.location.href = "admin-dashboard.html";
    }
  },

  formatStatusBadge(status) {
    const s = (status || "").toLowerCase();
    const localizedText =
      s === "submitted"
        ? window.t("statusSubmitted")
        : s === "under review"
          ? window.t("statusUnderReview")
          : s === "in progress"
            ? window.t("statusInProgress")
            : s === "resolved"
              ? window.t("statusResolved")
              : s === "rejected"
                ? window.t("statusRejected")
                : status;

    if (s === "submitted") return `<span class="badge bg-secondary"><i class="bi bi-clock-history me-1"></i>${localizedText}</span>`;
    if (s === "under review") return `<span class="badge bg-warning text-dark"><i class="bi bi-search me-1"></i>${localizedText}</span>`;
    if (s === "in progress") return `<span class="badge bg-info text-dark"><i class="bi bi-tools me-1"></i>${localizedText}</span>`;
    if (s === "resolved") return `<span class="badge bg-success"><i class="bi bi-check-circle-fill me-1"></i>${localizedText}</span>`;
    if (s === "rejected") return `<span class="badge bg-danger"><i class="bi bi-x-circle-fill me-1"></i>${localizedText}</span>`;
    return `<span class="badge bg-light text-dark">${localizedText}</span>`;
  },

  formatCategoryBadge(cat) {
    const localized = window.tCategory ? window.tCategory(cat) : cat;
    return `<span class="badge bg-light text-dark border">${localized}</span>`;
  },

  formatTrendBadge(trend) {
    const t = (trend || "").toLowerCase();
    const localized = window.tTrend ? window.tTrend(trend) : (t === "up" ? "Up" : t === "down" ? "Down" : "Stable");
    if (t === "up" || t === "तेजी") return `<span class="badge bg-success"><i class="bi bi-arrow-up me-1"></i>${localized}</span>`;
    if (t === "down" || t === "मंदी") return `<span class="badge bg-danger"><i class="bi bi-arrow-down me-1"></i>${localized}</span>`;
    return `<span class="badge bg-secondary">${localized}</span>`;
  },

  askGramMitra(question) {
    const q = (question || "").toLowerCase();
    const lang = localStorage.getItem("smartvillage_lang") || "mr";

    if (q.includes("7/12") || q.includes("namuna 8") || q.includes("नमुना ८") || q.includes("घरपट्टी") || q.includes("property")) {
      if (lang === "mr") {
        return "नमुना ८ (घरपट्टी उतारा) मिळवण्यासाठी आपण 'दाखले व अर्ज' विभागात जाऊन Namuna-8 अर्ज डाऊनलोड करू शकता किंवा ग्रामपंचायत कार्यालयात ₹२० फी भरून त्वरित मिळवू शकता.";
      } else if (lang === "hi") {
        return "प्रपत्र ८ (संपत्ति अर्क) प्राप्त करने के लिए 'सरकारी प्रपत्र' अनुभाग में जाएं या ग्राम पंचायत कार्यालय में ₹२० शुल्क देकर प्राप्त करें।";
      }
      return "To obtain Namuna 8 (Property Tax Extract), download the official form from the 'Official Forms' page or visit the Gram Panchayat office with ₹20 fee.";
    }

    if (q.includes("kisan") || q.includes("६०००") || q.includes("6000") || q.includes("शेतकरी") || q.includes("योजना") || q.includes("farmer")) {
      if (lang === "mr") {
        return "पीएम किसान सन्मान निधी योजनेअंतर्गत दरवर्षी ₹६,००० तीन हप्त्यांत मिळतात. यासाठी ७/१२ उतारा, बँक पासबुक व आधार कार्ड लागते. आपण 'शासकीय योजना' पेजवर जाऊन अधिक माहिती पाहू शकता.";
      } else if (lang === "hi") {
        return "पीएम किसान योजना के तहत प्रति वर्ष ₹६,००० मिलते हैं। आवश्यक दस्तावेज: ७/१२, बैंक पासबुक और आधार कार्ड। 'सरकारी योजनाएं' पृष्ठ पर अधिक विवरण देखें।";
      }
      return "PM Kisan Samman Nidhi provides ₹6,000/year to eligible farmers. Required docs: 7/12 land extract, bank passbook, and Aadhaar card. Check our Government Schemes section!";
    }

    if (q.includes("पाणी") || q.includes("water") || q.includes("pipe") || q.includes("जल") || q.includes("गळती") || q.includes("leakage")) {
      if (lang === "mr") {
        return "पाणीपुरवठा किंवा पाईपलाईन गळतीची तक्रार असल्यास त्वरित 'तक्रार निवारण' पेजवर जाऊन फोटोसह तक्रार नोंदवा किंवा नळ कारागीर कैलास जाधव (९८६०११४४७७) यांच्याशी संपर्क साधा.";
      } else if (lang === "hi") {
        return "पेयजल समस्या या पाइपलाइन लीकेज के लिए तुरंत 'शिकायत निवारण' पृष्ठ पर शिकायत दर्ज करें या पंचायत प्लंबर कैलाश जाधव (९८६०११४४७७) से संपर्क करें।";
      }
      return "For water pipeline issues or supply disruptions, file a grievance with photo evidence on our Grievance Portal or call Village Plumber Kailash Jadhav at 9860114477.";
    }

    if (q.includes("doctor") || q.includes("दवाखाना") || q.includes("आरोग्य") || q.includes("hospital") || q.includes("ambulance") || q.includes("health")) {
      if (lang === "mr") {
        return "प्राथमिक आरोग्य केंद्र (PHC) शिवनेरी सकाळी ९ ते १ व संध्याकाळी ४ ते ७ सुरू असते. वैद्यकीय अधिकारी डॉ. स्नेहल कुलकर्णी आहेत. आपत्कालीन रुग्णवाहिकेसाठी १०८ वर मोफत कॉल करा.";
      } else if (lang === "hi") {
        return "प्राथमिक स्वास्थ्य केंद्र (PHC) सुबह ९ से १ और शाम ४ से ७ बजे तक खुला रहता है। एम्बुलेंस हेतु १०८ डायल करें।";
      }
      return "Primary Health Center (PHC) Shivneri is open 9 AM - 1 PM & 4 PM - 7 PM under Dr. Snehal Kulkarni. For 24x7 Ambulance dial 108.";
    }

    if (lang === "mr") {
      return "नमस्ते! मी 'ग्राम मित्र' AI सहाय्यक आहे. आपण तक्रार नोंदणी, शासकीय योजना, दाखले, शेतकरी बाजार किंवा आरोग्य सेवेबद्दल काहीही विचारू शकता.";
    } else if (lang === "hi") {
      return "नमस्ते! मैं 'ग्राम मित्र' AI सहायक हूँ। आप शिकायत, सरकारी योजनाओं, प्रमाण पत्रों या किसान बाजार के बारे में पूछ सकते हैं।";
    }
    return "Hello! I am 'Gram Mitra' AI Assistant. You can ask me about filing complaints, government schemes, Gram Panchayat certificates, agriculture rates, or health services.";
  }
};
