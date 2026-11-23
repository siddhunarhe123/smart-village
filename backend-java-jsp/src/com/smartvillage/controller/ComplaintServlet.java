package com.smartvillage.controller;

import com.smartvillage.dao.ComplaintDAO;
import com.smartvillage.model.Complaint;
import com.smartvillage.model.User;
import java.io.IOException;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Controller Servlet for Submitting and Tracking Grievances
 */
@WebServlet("/ComplaintServlet")
public class ComplaintServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private ComplaintDAO complaintDAO;

    @Override
    public void init() {
        complaintDAO = new ComplaintDAO();
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {

        request.setCharacterEncoding("UTF-8");
        HttpSession session = request.getSession(false);
        User user = (session != null) ? (User) session.getAttribute("currentUser") : null;

        String action = request.getParameter("action");

        if ("submit".equalsIgnoreCase(action)) {
            String citizenId = (user != null && user.getCitizenId() != null) ? user.getCitizenId() : "CIT-GUEST";
            String title = request.getParameter("title");
            String category = request.getParameter("category");
            String ward = request.getParameter("ward");
            String landmark = request.getParameter("landmark");
            String description = request.getParameter("description");
            String priority = request.getParameter("priority");

            String newId = "CMP-2026-" + (System.currentTimeMillis() % 10000);

            Complaint c = new Complaint();
            c.setComplaintId(newId);
            c.setCitizenId(citizenId);
            c.setTitle(title);
            c.setCategory(category);
            c.setWard(ward);
            c.setLandmark(landmark);
            c.setDescription(description);
            c.setPriority(priority != null ? priority : "Medium");
            c.setPhotoUrl("https://images.unsplash.com/photo-1584467735815-f778f274e296?w=600");

            boolean success = complaintDAO.insertComplaint(c);
            if (success) {
                response.sendRedirect("citizen-dashboard.html?status=success&cid=" + newId);
            } else {
                response.sendRedirect("complaints.html?status=error");
            }
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {

        HttpSession session = request.getSession(false);
        User user = (session != null) ? (User) session.getAttribute("currentUser") : null;

        if (user != null && user.getCitizenId() != null) {
            List<Complaint> myComplaints = complaintDAO.getComplaintsByCitizenId(user.getCitizenId());
            request.setAttribute("complaintList", myComplaints);
            request.getRequestDispatcher("/jsp/citizenDashboard.jsp").forward(request, response);
        } else {
            response.sendRedirect("citizen-login.html");
        }
    }
}
