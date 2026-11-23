/**
 * SMART VILLAGE DIGITAL PLATFORM (ग्रामपंचायत शिवनेरी)
 * Seed Data & Database Initialization File
 * Supports English, Marathi (मराठी) and Hindi (हिंदी)
 */

const SEED_DATA = {
  villageInfo: {
    nameEn: "Gram Panchayat Shivneri",
    nameMr: "ग्रामपंचायत शिवनेरी (आदर्श स्मार्ट ग्राम)",
    nameHi: "ग्राम पंचायत शिवनेरी (आदर्श स्मार्ट ग्राम)",
    district: "Pune / पुणे",
    taluka: "Junnar / जुन्नर",
    pincode: "410502",
    sarpanch: "Smt. Sunita Anandrao Patil",
    gramSevak: "Shri. Rajesh V. Shinde",
    establishedYear: "1962",
    isoCertified: "ISO 9001:2015 Smart Gram",
    population: 4280,
    households: 865,
    literacyRate: "93.4%",
    cleanlinessRank: "1st in Taluka (Swachh Gram Puraskar)",
    solarCapacity: "140 kW",
    tapWaterCoverage: "99.8%",
    activeComplaints: 3,
    resolvedComplaints: 142
  },

  citizens: [
    {
      id: "CIT-001",
      name: "Ramesh Tukaram Patil",
      email: "ramesh@village.in",
      mobile: "9876543210",
      aadhar: "XXXX-XXXX-4589",
      password: "citizen123",
      ward: "Ward 2 (Kisan Galli)",
      houseNo: "H-45",
      occupation: "Farmer / शेतकरी",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      registeredOn: "2026-01-15",
      status: "Active"
    },
    {
      id: "CIT-002",
      name: "Anita Santosh Deshmukh",
      email: "anita@village.in",
      mobile: "9822334455",
      aadhar: "XXXX-XXXX-8912",
      password: "citizen123",
      ward: "Ward 1 (Grampanchayat Galli)",
      houseNo: "H-12",
      occupation: "Self Help Group (Bachat Gat) Leader",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      registeredOn: "2026-02-10",
      status: "Active"
    },
    {
      id: "CIT-003",
      name: "Vikram Eknath More",
      email: "vikram@village.in",
      mobile: "9890112233",
      aadhar: "XXXX-XXXX-3344",
      password: "citizen123",
      ward: "Ward 3 (Mandai Chowk)",
      houseNo: "H-78",
      occupation: "Agri-Trader & Entrepreneur",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      registeredOn: "2026-03-01",
      status: "Active"
    }
  ],

  admins: [
    {
      id: "ADM-001",
      name: "Rajesh V. Shinde",
      designation: "Gram Sevak / Village Development Officer",
      email: "admin@smartvillage.gov.in",
      mobile: "9422001122",
      password: "admin123",
      role: "SuperAdmin",
      department: "Rural Development & Administration",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: "ADM-002",
      name: "Smt. Sunita A. Patil",
      designation: "Sarpanch",
      email: "sarpanch@smartvillage.gov.in",
      mobile: "9822556677",
      password: "admin123",
      role: "PanchayatHead",
      department: "Gram Panchayat Council",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
    }
  ],

  complaints: [
    {
      id: "CMP-2026-1001",
      citizenId: "CIT-001",
      citizenName: "Ramesh Tukaram Patil",
      citizenMobile: "9876543210",
      category: "Water Supply",
      titleEn: "Pipeline Leakage Near Ward 2 Water Tank",
      titleMr: "वॉर्ड २ पाण्याच्या टाकीजवळील मुख्य पाईपलाईन गळती",
      titleHi: "वार्ड २ पानी की टंकी के पास पाइपलाइन लीकेज",
      descriptionEn: "Drinking water pipeline has broken near the junction of Ward 2, leading to low water pressure in 15 houses and wastage of clean water since yesterday morning.",
      descriptionMr: "वॉर्ड २ चौकाजवळ पिण्याच्या पाण्याची पाईपलाईन फुटल्याने १५ घरांमध्ये पाणी कमी दाबाने येत आहे आणि स्वच्छ पाण्याचा अपव्यय होत आहे.",
      descriptionHi: "वार्ड २ के पास पेयजल पाइपलाइन टूटने से १५ घरों में पानी की आपूर्ति बाधित हो रही है।",
      ward: "Ward 2 (Kisan Galli)",
      landmark: "Opposite Vitthal Temple / विठ्ठल मंदिरासमोर",
      photo: "https://images.unsplash.com/photo-1584467735815-f778f274e296?w=600&auto=format&fit=crop&q=80",
      status: "In Progress",
      priority: "High",
      submittedAt: "2026-11-19 09:30 AM",
      updatedAt: "2026-11-20 02:15 PM",
      assignedTo: "Kailash Jadhav (Panchayat Plumber)",
      adminRemarks: "Inspected by Gram Sevak. Replacement pipe allocated from stock; repair work is 70% complete today.",
      timeline: [
        { status: "Submitted", time: "19 Nov 2026, 09:30 AM", note: "Complaint logged by citizen online." },
        { status: "Under Review", time: "19 Nov 2026, 11:45 AM", note: "Grievance verified by Village Secretary office." },
        { status: "In Progress", time: "20 Nov 2026, 08:30 AM", note: "Work order issued to maintenance team; excavation begun." }
      ]
    },
    {
      id: "CMP-2026-1002",
      citizenId: "CIT-002",
      citizenName: "Anita Santosh Deshmukh",
      citizenMobile: "9822334455",
      category: "Street Lights",
      titleEn: "Solar Street Light Non-functional near Anganwadi",
      titleMr: "अंगणवाडी समोरील सोलर स्ट्रीट लाईट बंद आहे",
      titleHi: "आंगनवाड़ी के पास सोलर स्ट्रीट लाइट खराब",
      descriptionEn: "The solar pole light in front of Anganwadi Center 1 flickers and turns off by 8 PM. It causes safety issues for women and children walking at night.",
      descriptionMr: "अंगणवाडी केंद्र १ समोरील सोलर लाईट रात्री ८ नंतर बंद पडते, त्यामुळे येण्या-जाण्यासाठी अंधार असतो.",
      descriptionHi: "आंगनवाड़ी केंद्र के सामने सोलर लाइट रात को बंद हो जाती है।",
      ward: "Ward 1 (Grampanchayat Galli)",
      landmark: "Near Anganwadi No. 1",
      photo: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80",
      status: "Resolved",
      priority: "Medium",
      submittedAt: "2026-11-15 06:10 PM",
      updatedAt: "2026-11-17 04:00 PM",
      assignedTo: "Santosh Mhatre (MSEB Contractor)",
      adminRemarks: "Battery terminal cleaned and inverter circuit board replaced. Light tested and verified working normally.",
      timeline: [
        { status: "Submitted", time: "15 Nov 2026, 06:10 PM", note: "Citizen lodged grievance." },
        { status: "Under Review", time: "16 Nov 2026, 10:00 AM", note: "Forwarded to electrical contractor." },
        { status: "In Progress", time: "16 Nov 2026, 03:30 PM", note: "Technician reached site with spare battery." },
        { status: "Resolved", time: "17 Nov 2026, 04:00 PM", note: "Repairs completed. Tested in evening." }
      ]
    },
    {
      id: "CMP-2026-1003",
      citizenId: "CIT-003",
      citizenName: "Vikram Eknath More",
      citizenMobile: "9890112233",
      category: "Sanitation & Drainage",
      titleEn: "Drainage Blockage at Mandai Market Corner",
      titleMr: "मंडई चौकातील सांडपाणी नाला तुंबला आहे",
      titleHi: "सब्जी मंडी चौक पर नाली का बहाव अवरुद्ध",
      descriptionEn: "Plastic waste and silt have choked the storm drain near the vegetable market, causing water overflow on the main road.",
      descriptionMr: "भाजी मंडई जवळील गटार कचरा साचल्याने तुंबले असून सांडपाणी रस्त्यावर पसरत आहे.",
      descriptionHi: "मंडी के पास नाली जाम होने से गंदा पानी सड़क पर आ रहा है।",
      ward: "Ward 3 (Mandai Chowk)",
      landmark: "Weekly Bazaar Ground Gate",
      photo: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=600&auto=format&fit=crop&q=80",
      status: "Under Review",
      priority: "High",
      submittedAt: "2026-11-20 11:20 AM",
      updatedAt: "2026-11-21 09:10 AM",
      assignedTo: "Sanitation Inspector",
      adminRemarks: "Scheduled for suction machine cleaning along with weekly market sanitation drive on Saturday.",
      timeline: [
        { status: "Submitted", time: "20 Nov 2026, 11:20 AM", note: "Complaint registered." },
        { status: "Under Review", time: "21 Nov 2026, 09:10 AM", note: "Noted by Sanitation Supervisor; cleaning squad scheduled." }
      ]
    },
    {
      id: "CMP-2026-1004",
      citizenId: "CIT-001",
      citizenName: "Ramesh Tukaram Patil",
      citizenMobile: "9876543210",
      category: "Roads & Infrastructure",
      titleEn: "Pothole Repair Request on ZP Primary School Approach Road",
      titleMr: "जि. प. प्राथमिक शाळा रस्त्यावरील खड्डे दुरुस्ती",
      titleHi: "प्राथमिक विद्यालय मार्ग पर गड्ढे भरने का अनुरोध",
      descriptionEn: "Several deep potholes formed after heavy monsoon rains make cycling and walking unsafe for small children going to school.",
      descriptionMr: "पावसानंतर शाळेच्या रस्त्यावर मोठे खड्डे पडले असून सायकलस्वार मुलांसाठी धोकादायक ठरत आहेत.",
      descriptionHi: "स्कूल जाने वाले मार्ग पर गड्ढों की मरम्मत की आवश्यकता है।",
      ward: "Ward 1 (Grampanchayat Galli)",
      landmark: "50m before Zila Parishad School Gate",
      photo: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=600&auto=format&fit=crop&q=80",
      status: "Submitted",
      priority: "Medium",
      submittedAt: "2026-11-21 08:45 AM",
      updatedAt: "2026-11-21 08:45 AM",
      assignedTo: "Pending Assignment",
      adminRemarks: "Awaiting review in Monday engineering inspection.",
      timeline: [
        { status: "Submitted", time: "21 Nov 2026, 08:45 AM", note: "Complaint recorded in portal." }
      ]
    }
  ],

  schemes: [
    {
      id: "SCH-001",
      category: "Agriculture",
      titleEn: "PM Kisan Samman Nidhi Yojana",
      titleMr: "प्रधानमंत्री किसान सन्मान निधी योजना",
      titleHi: "प्रधानमंत्री किसान सम्मान निधि योजना",
      departmentEn: "Ministry of Agriculture & Farmers Welfare",
      departmentMr: "कृषी व शेतकरी कल्याण मंत्रालय",
      financialBenefit: "₹6,000 / year in 3 installments (₹2,000 every 4 months)",
      descriptionEn: "Direct income support of ₹6,000 per year to eligible landholding farmer families across the country, transferred directly into bank accounts via DBT.",
      descriptionMr: "शेतकरी कुटुंबांना आर्थिक स्थैर्य देण्यासाठी वार्षिक ₹६,००० चे अनुदान थेट बँक खात्यात ३ समान हप्त्यांमध्ये जमा केले जाते.",
      descriptionHi: "किसानों को प्रति वर्ष ₹६,००० की प्रत्यक्ष आय सहायता तीन समान किस्तों में दी जाती है।",
      eligibilityEn: [
        "Small and marginal landholder farmer families.",
        "Landholding must be recorded in State Land Records (7/12 extract / 8A).",
        "Aadhaar-linked bank account is mandatory.",
        "Institutional landholders and income-tax payers are not eligible."
      ],
      eligibilityMr: [
        "जमीनधारक शेतकरी कुटुंबे ज्यांच्या नावे ७/१२ उतारा आहे.",
        "बँक खाते आधार क्रमांकाशी जोडलेले असणे आवश्यक.",
        "आयकर भरणारे किंवा शासकीय नोकरदार या योजनेस पात्र नाहीत."
      ],
      documentsRequired: [
        "Aadhaar Card (आधार कार्ड)",
        "Land 7/12 & 8A Extract (७/१२ व ८-अ उतारा)",
        "Bank Passbook copy (बँक पासबुक प्रत)",
        "Mobile number linked with Aadhaar"
      ],
      applicationProcess: "Apply online at pmkisan.gov.in or visit your local CSC / Gram Panchayat Computer Center with 7/12 and Aadhaar.",
      officialLink: "https://pmkisan.gov.in",
      deadline: "Open round the year"
    },
    {
      id: "SCH-002",
      category: "Housing",
      titleEn: "Pradhan Mantri Awas Yojana - Gramin (PMAY-G)",
      titleMr: "प्रधानमंत्री आवास योजना - ग्रामीण (घरकूल योजना)",
      titleHi: "प्रधानमंत्री आवास योजना - ग्रामीण",
      departmentEn: "Ministry of Rural Development",
      departmentMr: "ग्रामविकास मंत्रालय",
      financialBenefit: "Financial assistance up to ₹1,20,000 + 90 days MGNREGA wages + ₹12,000 toilet incentive",
      descriptionEn: "To provide a pucca house with basic amenities to all homeless households and families living in kutcha and dilapidated houses in rural areas.",
      descriptionMr: "ग्रामीण भागातील बेघर व कच्च्या घरात राहणाऱ्या गरजू कुटुंबांना पक्के घर बांधण्यासाठी आर्थिक अनुदान.",
      descriptionHi: "ग्रामीण क्षेत्रों में बेघर और कच्चे मकानों में रहने वाले परिवारों को पक्का मकान उपलब्ध कराना।",
      eligibilityEn: [
        "Families without shelter or living in zero/one/two-room kutcha houses.",
        "Beneficiary identified based on SECC 2011 housing deprivation data and Gram Sabha verification.",
        "Must not own any pucca house anywhere in India."
      ],
      eligibilityMr: [
        "कच्च्या घरात राहणारी किंवा बेघर कुटुंबे.",
        "ग्रामसभेने मंजूर केलेल्या प्रतीक्षा यादीतील लाभार्थी.",
        "कुटुंबातील कोणाच्याही नावे पक्के घर नसावे."
      ],
      documentsRequired: [
        "Aadhaar Card of all family members",
        "Ration Card (शिधापत्रिका)",
        "Job Card / MGNREGA Card",
        "Land ownership certificate / Gram Panchayat Namuna 8"
      ],
      applicationProcess: "Submit application to Gram Sevak during Gram Sabha or apply via AwaasSoft portal through Panchayat office.",
      officialLink: "https://pmayg.nic.in",
      deadline: "Batch selection every fiscal year"
    },
    {
      id: "SCH-003",
      category: "Water & Sanitation",
      titleEn: "Jal Jeevan Mission (Har Ghar Jal)",
      titleMr: "जल जीवन मिशन (हर घर नल से जल)",
      titleHi: "जल जीवन मिशन (हर घर जल)",
      departmentEn: "Department of Drinking Water & Sanitation",
      departmentMr: "पाणीपुरवठा व स्वच्छता विभाग",
      financialBenefit: "Free individual functional household tap connection (FHTC) with assured 55 LPCD potable water",
      descriptionEn: "Providing safe and adequate drinking water through individual household tap connections to all households in rural India by 2024-2026.",
      descriptionMr: "गावातील प्रत्येक घरात नियमित व शुद्ध पिण्याच्या पाण्याचा नळ जोडणी मोफत उपलब्ध करून देणे.",
      descriptionHi: "प्रत्येक ग्रामीण परिवार को कार्यात्मक घरेलू नल कनेक्शन द्वारा सुरक्षित पेयजल प्रदान करना।",
      eligibilityEn: [
        "All permanent residential households in the Gram Panchayat limits.",
        "Applicants without existing registered tap connection."
      ],
      eligibilityMr: [
        "ग्रामपंचायत हद्दीतील सर्व कायमस्वरूपी रहिवासी घरे."
      ],
      documentsRequired: [
        "Gram Panchayat Assessment Extract (नमुना ८)",
        "Aadhaar Card",
        "Electricity Bill / Ration Card"
      ],
      applicationProcess: "Fill Form 3 on this portal or submit hardcopy at Gram Panchayat Water Committee office.",
      officialLink: "https://jaljeevanmission.gov.in",
      deadline: "Ongoing"
    },
    {
      id: "SCH-004",
      category: "Health & Social Welfare",
      titleEn: "Ayushman Bharat - PM-JAY & MJPJAY",
      titleMr: "आयुष्मान भारत - प्रधानमंत्री जन आरोग्य योजना (PMJAY)",
      titleHi: "आयुष्मान भारत - पीएम जन आरोग्य योजना",
      departmentEn: "National Health Authority",
      departmentMr: "सार्वजनिक आरोग्य विभाग",
      financialBenefit: "Health coverage of up to ₹5,00,000 per family per year for secondary and tertiary hospitalization",
      descriptionEn: "World's largest government-funded healthcare program providing cashless treatment in empanelled public and private hospitals.",
      descriptionMr: "गंभीर आजारांवर उपचारासाठी प्रति कुटुंब दरवर्षी ₹५ लाखांपर्यंतचे मोफत कॅशलेस उपचार.",
      descriptionHi: "गंभीर बीमारियों के लिए प्रति परिवार प्रति वर्ष ₹५ लाख तक का निःशुल्क कैशलेस इलाज।",
      eligibilityEn: [
        "Families enlisted in SECC socio-economic database or possessing yellow/orange ration cards.",
        "Senior citizens aged 70+ now eligible for separate ₹5 lakh top-up cover."
      ],
      eligibilityMr: [
        "पिवळे किंवा केशरी रेशन कार्डधारक कुटुंबे.",
        "७० वर्षांवरील ज्येष्ठ नागरिकांना विशेष ५ लाखांचे संरक्षण."
      ],
      documentsRequired: [
        "Ration Card",
        "Aadhaar Card of beneficiary",
        "Mobile phone for e-KYC"
      ],
      applicationProcess: "Create digital Ayushman Card instantly at Primary Health Center (PHC) Shivneri or via Ayushman App.",
      officialLink: "https://pmjay.gov.in",
      deadline: "Permanent Scheme"
    },
    {
      id: "SCH-005",
      category: "Clean Energy",
      titleEn: "PM Surya Ghar: Muft Bijli Yojana",
      titleMr: "पीएम सूर्य घर: मोफत वीज योजना (सौर रूफटॉप)",
      titleHi: "पीएम सूर्य घर: मुफ्त बिजली योजना",
      departmentEn: "Ministry of New & Renewable Energy",
      departmentMr: "नवीन व नवीकरणीय ऊर्जा मंत्रालय",
      financialBenefit: "Up to ₹78,000 direct central subsidy for rooftop solar installation (up to 300 free units/month)",
      descriptionEn: "Empowering rural households with solar rooftops to generate their own clean electricity and sell excess units back to the grid for extra income.",
      descriptionMr: "घराच्या छतावर सोलर पॅनल बसवण्यासाठी ₹७८,००० पर्यंतचे सरकारी अनुदान. महिन्याला ३०० युनिटपर्यंत वीज मोफत.",
      descriptionHi: "घरों की छतों पर सोलर सिस्टम लगाने के लिए ₹७८,००० तक की सरकारी सब्सिडी।",
      eligibilityEn: [
        "Resident homeowner with roof suitable for solar installation.",
        "Valid electricity consumer connection (MSEDCL / महावितरण)."
      ],
      eligibilityMr: [
        "स्वतःचे घर व सोलरसाठी योग्य छत असणारे नागरिक.",
        "महावितरण वीज ग्राहक क्रमांक असणे आवश्यक."
      ],
      documentsRequired: [
        "Latest Electricity Bill (वीज बिल)",
        "Property tax receipt (घरपट्टी पावती)",
        "Aadhaar Card",
        "Bank Passbook"
      ],
      applicationProcess: "Register at pmsuryaghar.gov.in or contact Village Solar Mitra at Gram Panchayat.",
      officialLink: "https://pmsuryaghar.gov.in",
      deadline: "Open until targets achieved"
    },
    {
      id: "SCH-006",
      category: "Agriculture & Water",
      titleEn: "Magel Tyala Shettale (Farm Pond Scheme)",
      titleMr: "मागेल त्याला शेततळे योजना (महाडीबीटी)",
      titleHi: "मागेल त्याला शेततळे (खेत तालाब योजना)",
      departmentEn: "Department of Agriculture, Maharashtra",
      departmentMr: "महाराष्ट्र शासन कृषी विभाग",
      financialBenefit: "Financial subsidy up to ₹75,000 for digging and plastic lining of farm pond",
      descriptionEn: "To provide water security for crops during dry spells and boost ground water recharge by subsidizing individual farm ponds.",
      descriptionMr: "पावसाचे पाणी साठवून दुष्काळात पिकांना पाणी देण्यासाठी शेतात तळे खोदण्यासाठी ₹७५,००० चे अनुदान.",
      descriptionHi: "फसलों को सुरक्षित सिंचाई के लिए खेत में तालाब निर्माण हेतु ₹७५,००० का अनुदान।",
      eligibilityEn: [
        "Farmer with minimum 0.60 hectare agricultural land holding.",
        "Must have independent access and suitable soil strata."
      ],
      eligibilityMr: [
        "किमान ०.६० हेक्टर जमीन असणारे शेतकरी.",
        "पूर्वी या योजनेचा लाभ घेतलेला नसावा."
      ],
      documentsRequired: [
        "7/12 Extract with water source remark",
        "8A Extract",
        "Caste Certificate (if applicable for priority)",
        "Undertaking bond"
      ],
      applicationProcess: "Apply online through MahaDBT Farmer Portal (mahadbt.maharashtra.gov.in).",
      officialLink: "https://mahadbt.maharashtra.gov.in",
      deadline: "Batchwise lottery allotment"
    }
  ],

  notices: [
    {
      id: "NOT-2026-001",
      category: "Gram Sabha",
      priority: "Urgent",
      date: "2026-11-20",
      validTill: "2026-11-30",
      titleEn: "Special Gram Sabha Notice on Annual Village Budget & Development Plan",
      titleMr: "विशेष ग्रामसभा सूचना: वार्षिक विकास आराखडा व अंदाजपत्रक",
      titleHi: "विशेष ग्राम सभा सूचना: वार्षिक ग्राम विकास योजना",
      contentEn: "All respected villagers and voting citizens are hereby informed that a Special Gram Sabha meeting is scheduled on Thursday, 26th November 2026 at 10:30 AM at the Village Panchayat Hall. Topics include: approval of 15th Finance Commission works, Jal Jeevan Mission pipeline maintenance, and approval of new beneficiaries under PMAY Gharkul scheme. Your presence is valuable.",
      contentMr: "शिवनेरी गावातील सर्व सन्माननीय ग्रामस्थांना कळविण्यात येते की, गुरुवार दि. २६ नोव्हेंबर २०२६ रोजी सकाळी १०:३० वाजता ग्रामपंचायत सभागृहात विशेष ग्रामसभेचे आयोजन करण्यात आले आहे. १५ वा वित्त आयोग कामे, पाणीपुरवठा नियोजन व घरकूल यादी मंजुरी यावर चर्चा होईल. सर्वांनी उपस्थित राहावे.",
      contentHi: "सभी सम्मानित ग्रामीणों को सूचित किया जाता है कि गुरुवार २६ नवंबर २०२६ को सुबह १०:३० बजे ग्राम पंचायत भवन में विशेष ग्राम सभा होगी।",
      issuedBy: "Smt. Sunita Patil (Sarpanch) & Shri. Rajesh Shinde (Gram Sevak)",
      attachment: "Gram_Sabha_Agenda_Nov2026.pdf"
    },
    {
      id: "NOT-2026-002",
      category: "Public Utility",
      priority: "Important",
      date: "2026-11-18",
      validTill: "2026-11-24",
      titleEn: "Periodic Cleaning of Elevated Drinking Water Overhead Reservoirs (ESR)",
      titleMr: "पिण्याच्या पाण्याच्या उंच टाक्यांची त्रैमासिक स्वच्छता मोहीम",
      titleHi: "पेयजल टंकियों की त्रैमासिक सफाई सूचना",
      contentEn: "Drinking water supply will remain closed on Sunday, 23rd November from 8:00 AM to 5:00 PM across Wards 1, 2, and 3 due to bleaching powder treatment, de-silting, and ultrasonic pipe inspection. Residents are requested to store adequate water a day in advance.",
      contentMr: "गावातील वॉर्ड १, २ व ३ मधील पिण्याच्या पाण्याच्या टाक्यांची स्वच्छता व निर्जंतुकीकरण रविवार दि. २३ नोव्हेंबर रोजी करण्यात येणार असल्याने त्या दिवशी सकाळी ८ ते संध्याकाळी ५ या वेळेत पाणीपुरवठा बंद राहील.",
      contentHi: "पानी की टंकियों की सफाई हेतु रविवार २३ नवंबर को सुबह ८ से शाम ५ बजे तक जलापूर्ति बंद रहेगी।",
      issuedBy: "Village Water & Sanitation Committee (VWSC)",
      attachment: "Water_Cleaning_Schedule.pdf"
    },
    {
      id: "NOT-2026-003",
      category: "Health Alert",
      priority: "Urgent",
      date: "2026-11-16",
      validTill: "2026-11-28",
      titleEn: "National Pulse Polio & Routine Child Immunization Camp",
      titleMr: "राष्ट्रीय पल्स पोलिओ व बाल लसीकरण शिबीर",
      titleHi: "राष्ट्रीय पल्स पोलियो एवं बाल टीकाकरण शिविर",
      contentEn: "Primary Health Center (PHC) Shivneri and Anganwadi Centers 1, 2 & 3 will conduct free pulse polio oral drops administration for all children aged 0 to 5 years on Sunday from 9:00 AM to 5:00 PM. Mobile vaccine van will also visit remote farm wadis.",
      contentMr: "० ते ५ वर्षे वयोगटातील सर्व बालकांसाठी रविवार रोजी प्राथमिक आरोग्य केंद्र व अंगणवाडी केंद्रात मोफत पोलिओ डोस दिले जातील. एकाही बालकाला वंचित ठेवू नका.",
      contentHi: "० से ५ वर्ष तक के सभी बच्चों को पोलियो की खुराक देने हेतु शिविर का आयोजन किया जा रहा है।",
      issuedBy: "Dr. Snehal Kulkarni, Medical Officer, PHC Shivneri",
      attachment: "Polio_Camp_Details.pdf"
    },
    {
      id: "NOT-2026-004",
      category: "Agriculture Alert",
      priority: "Normal",
      date: "2026-11-14",
      validTill: "2026-12-15",
      titleEn: "Pradhan Mantri Fasal Bima Yojana (PMFBY) Rabi Crop Enrollment Deadline",
      titleMr: "पंतप्रधान पीक विमा योजना - रब्बी हंगाम अंतिम मुदत",
      titleHi: "प्रधानमंत्री फसल बीमा योजना - रबी मौसम नामांकन",
      contentEn: "Last date to enroll wheat, gram (chana), onion, and jowar crops under subsidized crop insurance is 15th December 2026. Insure your crop at just ₹1 token fee under Maharashtra State policy at your nearest CSC center.",
      contentMr: "रब्बी हंगामातील गहू, हरभरा, कांदा व ज्वारी पिकांच्या विम्यासाठी अंतिम तारीख १५ डिसेंबर २०२६ आहे. फक्त १ रुपयात पीक विमा उपलब्ध आहे.",
      contentHi: "रबी फसलों के बीमा हेतु अंतिम तिथि १५ दिसंबर २०२६ है।",
      issuedBy: "Taluka Agriculture Officer & Gram Panchayat Krishi Sahayak",
      attachment: "Crop_Insurance_Guidelines.pdf"
    }
  ],

  // 100% Accurate Product Catalog - Every image directly matches product title!
  marketplace: [
    {
      id: "PRD-001",
      sellerName: "Ramesh Tukaram Patil",
      sellerPhone: "+919876543210",
      sellerWard: "Ward 2 (Kisan Galli)",
      productNameEn: "Fresh Organic Alphonso Hapus Mangoes",
      productNameMr: "ताजे सेंद्रिय हापूस आंबे (अस्सल देवगड/जुन्नर)",
      productNameHi: "ताजा जैविक हापुस आम",
      category: "Fruits",
      price: 650,
      unit: "per Dozen",
      quantityAvailable: "45 Dozens",
      descriptionEn: "Naturally ripened with paddy grass, no carbide chemicals. Direct from our heritage family orchard on the foothills of Shivneri.",
      descriptionMr: "घास-पेंढ्यात पिकवलेले अस्सल चवीचे देवगड/जुन्नर हापूस आंबे. कोणत्याही रासायनिक पावडरचा वापर नाही.",
      descriptionHi: "बिना किसी रसायन के प्राकृतिक रूप से पकाए गए ताजे आम।",
      image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&auto=format&fit=crop&q=80", // Accurate Mango
      verifiedFarmer: true,
      listedOn: "2026-11-19"
    },
    {
      id: "PRD-002",
      sellerName: "Anita Santosh Deshmukh (Maa Bhavani Bachat Gat)",
      sellerPhone: "+919822334455",
      sellerWard: "Ward 1",
      productNameEn: "Pure Desi Gir Cow Vedic A2 Bilona Ghee",
      productNameMr: "शुद्ध गावरान देशी गीर गायीचे बिलोना तूप",
      productNameHi: "शुद्ध देसी गिर गाय का बिलोना घी",
      category: "Dairy",
      price: 1400,
      unit: "per 1 Kg Jar",
      quantityAvailable: "20 Jars",
      descriptionEn: "Prepared by traditional wooden churn (bilona) method from curd of grass-fed native Gir cows. Golden aroma, lab-tested purity.",
      descriptionMr: "पारंपरिक पद्धतीने लाकडी रवीने घुसळून बनवलेले सुगंधी व पौष्टिक देशी गायीचे साजूक तूप.",
      descriptionHi: "पारंपरिक बिलोना विधि से तैयार शुद्ध देशी गाय का घी।",
      image: "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?w=600&auto=format&fit=crop&q=80", // Accurate Ghee
      verifiedFarmer: true,
      listedOn: "2026-11-18"
    },
    {
      id: "PRD-003",
      sellerName: "Kisan Farmer Club Shivneri",
      sellerPhone: "+919890112233",
      sellerWard: "Ward 3",
      productNameEn: "Fresh Organic Farm Vegetables Basket",
      productNameMr: "ताजा सेंद्रिय भाजीपाला बास्केट (पालक, मेथी, वांगी, दोडका)",
      productNameHi: "ताजी जैविक सब्जियां टोकरी",
      category: "Vegetables",
      price: 250,
      unit: "per 5 Kg Mixed Basket",
      quantityAvailable: "60 Baskets",
      descriptionEn: "Harvested early morning daily: fresh spinach, fenugreek, brinjal, ridge gourd, ladyfinger and coriander grown with well water.",
      descriptionMr: "दररोज सकाळी ताजी तोडलेली सेंद्रिय भाजी: पालक, मेथी, वांगी, दोडका, भेंडी आणि कोथिंबीर.",
      descriptionHi: "रोज सुबह तोड़ी गई ताजी हरी सब्जियां।",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80", // Accurate Vegetables
      verifiedFarmer: true,
      listedOn: "2026-11-20"
    },
    {
      id: "PRD-004",
      sellerName: "Village Digital Center / CSC Shivneri",
      sellerPhone: "+919422001122",
      sellerWard: "Ward 1 (Grampanchayat Galli)",
      productNameEn: "Student & Office Refurbished Core i5 Laptop",
      productNameMr: "विद्यार्थी व कार्यालयीन लॅपटॉप (Intel Core i5, 8GB RAM, SSD)",
      productNameHi: "विद्यार्थी एवं कार्यालयीन लैपटॉप (Core i5)",
      category: "Electronics",
      price: 18500,
      unit: "per Unit (with Charger & Bag)",
      quantityAvailable: "4 Units",
      descriptionEn: "HP/Dell 14-inch Business series laptop, Fast SSD, Windows 11, excellent battery backup (4+ hours). Ideal for college students, coding & office work.",
      descriptionMr: "जि. प. शाळा व कॉलेज विद्यार्थ्यांसाठी उत्कृष्ट स्थितीतील बिझनेस लॅपटॉप. जलद SSD, ४ तास बॅटरी व ६ महिने वॉरंटी.",
      descriptionHi: "कॉलेज छात्रों और डिजिटल कार्य हेतु बेहतरीन लैपटॉप।",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=80", // Accurate Laptop
      verifiedFarmer: false,
      listedOn: "2026-11-20"
    },
    {
      id: "PRD-005",
      sellerName: "Santosh G. Jadhav",
      sellerPhone: "+919860114477",
      sellerWard: "Ward 2",
      productNameEn: "Fresh Red Farm Tomatoes (Grade A)",
      productNameMr: "ताजे गावरान लाल टोमॅटो (ग्रेड ए)",
      productNameHi: "ताजा लाल टमाटर",
      category: "Vegetables",
      price: 35,
      unit: "per Kg",
      quantityAvailable: "300 Kg",
      descriptionEn: "Firm, juicy, naturally ripened farm tomatoes picked today. Rich in flavor and vitamins.",
      descriptionMr: "आजच शेतातून तोडलेले टवटवीत व रसरशीत लाल टोमॅटो.",
      descriptionHi: "खेत से ताजे तोड़े गए लाल पके टमाटर।",
      image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&auto=format&fit=crop&q=80", // Accurate Tomato
      verifiedFarmer: true,
      listedOn: "2026-11-19"
    },
    {
      id: "PRD-006",
      sellerName: "Vikram Eknath More",
      sellerPhone: "+919890112233",
      sellerWard: "Ward 3",
      productNameEn: "Stone-Ground Natural Turmeric Powder (Curcumin 4.5%+)",
      productNameMr: "सेंद्रिय हळद पावडर (स्थानिक शेतातील अस्सल हळद)",
      productNameHi: "प्राकृतिक हल्दी पाउडर",
      category: "Spices & Grains",
      price: 240,
      unit: "per 1 Kg Pack",
      quantityAvailable: "80 Kg",
      descriptionEn: "Unpolished, sun-dried Salem variety turmeric ground slowly at low temperatures to preserve therapeutic curcumin content.",
      descriptionMr: "घरगुती उकडलेली व उन्हात वाळवून जात्यावर/गिरणीत दळलेली औषधी हळद पावडर.",
      descriptionHi: "औषधीय गुणों से भरपूर शुद्ध प्राकृतिक हल्दी।",
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&auto=format&fit=crop&q=80", // Accurate Turmeric
      verifiedFarmer: true,
      listedOn: "2026-11-17"
    },
    {
      id: "PRD-007",
      sellerName: "Dnyaneshwar Shinde",
      sellerPhone: "+919765123456",
      sellerWard: "Ward 4 (Bazaar Peth)",
      productNameEn: "Organic Chemical-free Solid Jaggery Blocks (गुळ)",
      productNameMr: "सेंद्रिय काकवी व पिवळा गूळ (कॅमिकलमुक्त)",
      productNameHi: "जैविक देशी गुड़",
      category: "Organic Foods",
      price: 65,
      unit: "per Kg",
      quantityAvailable: "250 Kg",
      descriptionEn: "Prepared using ladyfinger mucilage as organic clarifier. Rich in iron, zinc, and natural minerals.",
      descriptionMr: "भेंडीच्या रसाचा वापर करून नैसर्गिक पद्धतीने स्वच्छ केलेला शुद्ध सेंद्रिय गूळ.",
      descriptionHi: "बिना केमिकल तैयार किया गया प्राकृतिक गुड़।",
      image: "https://images.unsplash.com/photo-1601039641847-7857b994d704?w=600&auto=format&fit=crop&q=80", // Accurate Jaggery
      verifiedFarmer: true,
      listedOn: "2026-11-16"
    },
    {
      id: "PRD-008",
      sellerName: "Savitribai Mahila Bachat Gat",
      sellerPhone: "+919421098765",
      sellerWard: "Ward 2",
      productNameEn: "Handmade Eco-friendly Bamboo Baskets & Craft",
      productNameMr: "हस्तनिर्मित बांबूच्या परड्या व पर्यावरणपूरक वस्तू",
      productNameHi: "हस्तनिर्मित बांस की टोकरियां",
      category: "Handicrafts",
      price: 180,
      unit: "per Piece",
      quantityAvailable: "35 Pieces",
      descriptionEn: "Sturdy, beautifully woven traditional village bamboo crafts made by local artisan women.",
      descriptionMr: "गावातील महिलांनी बांबूपासून तयार केलेल्या पारंपरिक व मजबूत परड्या आणि शोभिवंत वस्तू.",
      descriptionHi: "स्थानीय कारीगरों द्वारा निर्मित प्राकृतिक बांस की वस्तुएं।",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?w=600&auto=format&fit=crop&q=80", // Accurate Bamboo craft
      verifiedFarmer: false,
      listedOn: "2026-11-15"
    }
  ],

  forms: [
    {
      id: "FRM-001",
      code: "Namuna-8",
      department: "Revenue & Taxes",
      titleEn: "Namuna 8 Property Assessment Extract",
      titleMr: "नमुना ८ - मालमत्ता व कर आकारणी नोंदवही उतारा अर्ज",
      titleHi: "प्रपत्र ८ - संपत्ति कर मूल्यांकन अर्क आवेदन",
      fee: "₹20 / Official Certified Copy",
      processingTime: "2 Working Days",
      requiredDocs: "Old tax receipt or house electricity bill",
      description: "Official legal proof of property ownership and tax assessment within Gram Panchayat jurisdiction, required for bank loans, electricity meter transfers, and registry."
    },
    {
      id: "FRM-002",
      code: "Form-1",
      department: "Civil Registration",
      titleEn: "Birth Certificate Application Form",
      titleMr: "जन्म प्रमाणपत्र अर्ज (प्रपत्र क्रमांक १)",
      titleHi: "जन्म प्रमाण पत्र आवेदन पत्र",
      fee: "Free (within 21 days) / ₹10 after 21 days",
      processingTime: "Same Day or 3 Days",
      requiredDocs: "Hospital discharge card/slip, parents Aadhaar card copies, marriage certificate",
      description: "Required for legal name registration, Aadhaar creation, school admission, and passport."
    },
    {
      id: "FRM-003",
      code: "Form-2",
      department: "Civil Registration",
      titleEn: "Death Certificate Application Form",
      titleMr: "मृत्यू प्रमाणपत्र अर्ज (प्रपत्र क्रमांक २)",
      titleHi: "मृत्यु प्रमाण पत्र आवेदन पत्र",
      fee: "Free (within 21 days)",
      processingTime: "3 Working Days",
      requiredDocs: "Doctor's medical cause of death slip, cremation pass, deceased and applicant Aadhaar cards",
      description: "Official certificate essential for legal heir succession, insurance claims, and bank settlement."
    },
    {
      id: "FRM-004",
      code: "NOC-01",
      department: "General Administration",
      titleEn: "Gram Panchayat No Objection Certificate (NOC)",
      titleMr: "ग्रामपंचायत ना हरकत प्रमाणपत्र (NOC)",
      titleHi: "ग्राम पंचायत अनापत्ति प्रमाण पत्र (एनओसी)",
      fee: "₹50",
      processingTime: "5 Working Days",
      requiredDocs: "Namuna 8 extract, building layout blueprint, property tax clearance receipt",
      description: "Required for new MSEB electricity connections, borewell drilling, commercial shops, and bank collateral."
    },
    {
      id: "FRM-005",
      code: "WTR-01",
      department: "Water Works",
      titleEn: "Application for New Drinking Water Tap Connection",
      titleMr: "नवीन घरगुती पिण्याच्या पाण्याची नळ जोडणी अर्ज",
      titleHi: "नया नल कनेक्शन आवेदन पत्र",
      fee: "₹500 Deposit (Subsidized under JJM)",
      processingTime: "7 Working Days",
      requiredDocs: "Namuna 8 property copy, applicant Aadhaar card, location map sketch",
      description: "Apply for individual piped potable water pipeline from the village distribution network."
    },
    {
      id: "FRM-006",
      code: "RES-01",
      department: "Citizen Services",
      titleEn: "Gram Sevak Residence Certificate",
      titleMr: "ग्रामसेवक रहिवासी प्रमाणपत्र अर्ज",
      titleHi: "ग्राम सेवक निवास प्रमाण पत्र आवेदन",
      fee: "₹10",
      processingTime: "1 Working Day",
      requiredDocs: "Ration card copy, Aadhaar card, voter ID card",
      description: "Certifies that the applicant is a bonafide resident of Shivneri village for scholarship, admissions, and ration cards."
    }
  ],

  emergencyContacts: [
    { roleEn: "Gram Sevak (Village Secretary)", roleMr: "ग्रामसेवक (सचिव)", roleHi: "ग्राम सचिव", name: "Shri. Rajesh V. Shinde", phone: "+919422001122", timing: "9:30 AM - 6:00 PM" },
    { roleEn: "Sarpanch", roleMr: "सरपंच (सौ. सुनिता पाटील)", roleHi: "सरपंच", name: "Smt. Sunita A. Patil", phone: "+919822556677", timing: "24x7 Emergency" },
    { roleEn: "Primary Health Center (PHC)", roleMr: "प्राथमिक आरोग्य केंद्र (PHC)", roleHi: "प्राथमिक स्वास्थ्य केंद्र", name: "Dr. Snehal Kulkarni", phone: "+919823456780", timing: "24x7 Emergency OPD" },
    { roleEn: "Government Ambulance", roleMr: "शासकीय रुग्णवाहिका", roleHi: "सरकारी एम्बुलेंस", name: "Emergency Toll Free", phone: "108", timing: "24x7 Toll-Free" },
    { roleEn: "Police Patil", roleMr: "पोलीस पाटील", roleHi: "पुलिस पाटिल", name: "Shri. Pandurang Jadhav", phone: "+919850123987", timing: "24x7 Law & Order" },
    { roleEn: "MSEB Electricity Lineman", roleMr: "महावितरण वायरमन", roleHi: "बिजली लाइनमैन", name: "Shri. Balasaheb Thorat", phone: "+919766543219", timing: "Power Outages" },
    { roleEn: "Talathi (Revenue Officer)", roleMr: "तलाठी (सज्जा शिवनेरी)", roleHi: "पटवारी / तलाठी", name: "Shri. Sachin Kale", phone: "+919403889900", timing: "Mon, Wed, Fri" },
    { roleEn: "Panchayat Plumber", roleMr: "ग्रामपंचायत नळ कारागीर", roleHi: "पंचायत नलसाज", name: "Shri. Kailash Jadhav", phone: "+919860114477", timing: "6:00 AM - 8:00 PM" }
  ],

  agricultureData: {
    weather: {
      temp: "28°C",
      conditionEn: "Partly Cloudy",
      conditionMr: "आंशिक ढगाळ",
      conditionHi: "आंशिक रूप से बादलयुक्त",
      humidity: "62%",
      wind: "11 km/h",
      rainfallForecastEn: "Light drizzle expected over weekend (15% chance)",
      rainfallForecastMr: "वीकेंडला हलक्या सरींची शक्यता (१५%)",
      rainfallForecastHi: "सप्ताहांत में हल्की बारिश की संभावना (१५%)"
    },
    mandiRates: [
      { cropEn: "Soybean", cropMr: "सोयाबीन", cropHi: "सोयाबीन", minPrice: "₹4,450", maxPrice: "₹4,920", avgPrice: "₹4,750 / Quintal", trend: "up" },
      { cropEn: "Wheat (Sihor)", cropMr: "गहू (सिहोर)", cropHi: "गेहूं (सिहोर)", minPrice: "₹2,600", maxPrice: "₹3,150", avgPrice: "₹2,900 / Quintal", trend: "stable" },
      { cropEn: "Red Onion", cropMr: "लाल कांदा", cropHi: "लाल प्याज", minPrice: "₹1,800", maxPrice: "₹2,450", avgPrice: "₹2,200 / Quintal", trend: "down" },
      { cropEn: "Gram / Chana", cropMr: "चना / हरभरा", cropHi: "चना", minPrice: "₹5,200", maxPrice: "₹5,800", avgPrice: "₹5,550 / Quintal", trend: "up" },
      { cropEn: "Tomato", cropMr: "टोमॅटो", cropHi: "टमाटर", minPrice: "₹250", maxPrice: "₹420", avgPrice: "₹340 / Crate (20kg)", trend: "up" }
    ],
    seasonalTips: [
      { titleEn: "Rabi Sowing Advisory", titleMr: "रब्बी हरभरा बीजप्रक्रिया सल्ला", tipEn: "Ensure seed treatment with Trichoderma (5g/kg) and Rhizobium culture before sowing gram/chana to prevent wilt disease.", tipMr: "मर रोग नियंत्रणासाठी ट्रायकोडर्मा ५ ग्रॅम आणि रायझोबियम जिवाणू संवर्धक प्रति १० किलो बियाण्यास चोळावे." },
      { titleEn: "Soil Health Camp", titleMr: "मृदा आरोग्य तपासणी", tipEn: "Get your field soil tested free this Tuesday at the Gram Panchayat hall under the National Soil Health Mission.", tipMr: "मंगळवार रोजी ग्रामपंचायत सभागृहात मोफत माती नमुना तपासणी शिबीर आयोजित करण्यात आले आहे." },
      { titleEn: "Micro-Irrigation Subsidy", titleMr: "ठिबक व तुषार सिंचन ८०% अनुदान", tipEn: "Apply on MahaDBT for 80% subsidy on Drip and Sprinkler systems before 10th December.", tipMr: "महाडीबीटी शेतकरी पोर्टलवर मुख्यमंत्री शाश्वत कृषी सिंचन योजनेअंतर्गत १० डिसेंबरपूर्वी ऑनलाईन अर्ज करा." }
    ]
  },

  healthData: {
    phcName: "Primary Health Center Shivneri (National Health Mission)",
    medicalOfficer: "Dr. Snehal Kulkarni (MBBS, DGO)",
    staffCount: "1 Doctor, 2 Staff Nurses, 1 Lab Technician, 3 ASHA Workers",
    opdTimings: "Morning 09:00 AM - 01:00 PM | Evening 04:00 PM - 07:00 PM",
    availableFacilities: [
      "24x7 Emergency First-aid & Delivery Room",
      "Free Blood & Urine Diagnostic Lab",
      "Ayushman Bharat Golden Card Registration",
      "Pulse Polio & Child Vaccination Center",
      "Free Generic Medicines Counter",
      "Tele-Medicine Video Consultation with District Civil Hospital"
    ]
  },

  educationData: {
    schools: [
      { name: "Zilla Parishad Primary School (Std 1st to 7th)", students: 240, teachers: 8, rating: "Grade A+ (Digital Classroom)", principal: "Shri. V. G. Kute" },
      { name: "Shivneri High School & Junior College (Std 8th to 12th)", students: 480, streams: "Arts, Science, Commerce, Agri-Vocational", principal: "Dr. P. R. Gawade" },
      { name: "Anganwadi Centers 1, 2, 3 (Early Learning & Nutrition)", children: 95, focus: "Early childhood learning & nutrition" }
    ],
    facilities: [
      "Dr. A.P.J. Abdul Kalam Village Digital E-Library (12 High-speed PCs with Free Wi-Fi)",
      "Competitive Exam Study Room (MPSC, UPSC, Police Bharti, Banking preparation)",
      "Solar-powered smart interactive flat panel classrooms in Z.P. School",
      "Free distribution of textbooks and uniform under Samagra Shiksha Abhiyan"
    ]
  }
};

if (typeof window !== "undefined") {
  window.SEED_DATA = SEED_DATA;
}
