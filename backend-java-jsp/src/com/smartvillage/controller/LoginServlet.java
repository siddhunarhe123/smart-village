package com.smartvillage.controller;

import com.smartvillage.dao.UserDAO;
import com.smartvillage.model.User;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet handling Citizen & Admin Login Authentication
 */
@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private UserDAO userDAO;

    @Override
    public void init() {
        userDAO = new UserDAO();
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {

        request.setCharacterEncoding("UTF-8");
        String identifier = request.getParameter("identifier");
        String password = request.getParameter("password");
        String roleParam = request.getParameter("targetRole"); // "citizen" or "admin"

        if (identifier == null || password == null || identifier.trim().isEmpty() || password.trim().isEmpty()) {
            request.setAttribute("errorMessage", "कृपया युझरनेम/मोबाईल आणि पासवर्ड टाका.");
            request.getRequestDispatcher("citizen-login.html").forward(request, response);
            return;
        }

        User user = userDAO.authenticate(identifier.trim(), password.trim());

        if (user != null) {
            HttpSession session = request.getSession();
            session.setAttribute("currentUser", user);
            session.setAttribute("userRole", user.getRole());

            if ("ADMIN".equalsIgnoreCase(user.getRole()) || "GRAM_SEVAK".equalsIgnoreCase(user.getRole()) || "SARPANCH".equalsIgnoreCase(user.getRole())) {
                response.sendRedirect("admin-dashboard.html");
            } else {
                response.sendRedirect("citizen-dashboard.html");
            }
        } else {
            request.setAttribute("errorMessage", "अवैध लॉगिन माहिती! कृपया पुन्हा प्रयत्न करा.");
            if ("admin".equalsIgnoreCase(roleParam)) {
                request.getRequestDispatcher("admin-login.html").forward(request, response);
            } else {
                request.getRequestDispatcher("citizen-login.html").forward(request, response);
            }
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }
        response.sendRedirect("index.html");
    }
}
