import java.sql.*;

public class JDBCConnection {
    public static void main(String[] args) {
        String url = "jdbc:sqlite:students.db"; // or use MySQL with relevant driver and URL
        try (Connection conn = DriverManager.getConnection(url);
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT * FROM students")) {

            while (rs.next()) {
                System.out.println(rs.getInt("id") + " - " + rs.getString("name"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
