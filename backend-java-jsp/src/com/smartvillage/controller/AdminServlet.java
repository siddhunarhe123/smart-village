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
 * Controller Servlet for Gram Panchayat Admin Operations
 */
@WebServlet("/AdminServlet")
public class AdminServlet extends HttpServlet {
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

        if (user == null || (!"ADMIN".equalsIgnoreCase(user.getRole()) && !"GRAM_SEVAK".equalsIgnoreCase(user.getRole()) && !"SARPANCH".equalsIgnoreCase(user.getRole()))) {
            response.sendRedirect("admin-login.html");
            return;
        }

        String action = request.getParameter("action");

        if ("updateStatus".equalsIgnoreCase(action)) {
            String complaintId = request.getParameter("complaintId");
            String newStatus = request.getParameter("status");
            String adminRemarks = request.getParameter("adminRemarks");
            String assignedTo = request.getParameter("assignedTo");

            complaintDAO.updateStatus(complaintId, newStatus, adminRemarks, assignedTo, user.getFullName());
            response.sendRedirect("admin-dashboard.html?updated=" + complaintId);
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {

        HttpSession session = request.getSession(false);
        User user = (session != null) ? (User) session.getAttribute("currentUser") : null;

        if (user != null && ("ADMIN".equalsIgnoreCase(user.getRole()) || "GRAM_SEVAK".equalsIgnoreCase(user.getRole()))) {
            List<Complaint> allComplaints = complaintDAO.getAllComplaints();
            request.setAttribute("allComplaints", allComplaints);
            request.getRequestDispatcher("/jsp/adminDashboard.jsp").forward(request, response);
        } else {
            response.sendRedirect("admin-login.html");
        }
    }
}
