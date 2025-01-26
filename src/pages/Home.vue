<template>
  <div class="container text-center">
    <h1>Welcome to the Home Page</h1>
    <p>This is the homepage of our Vue app.</p>

    <!-- Table -->
    <div class="table-responsive">
      <table
        ref="dataTable"
        class="table table-striped table-bordered"
        style="width: 100%"
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
      </table>
    </div>

    <!-- ย้าย Counter มาที่นี่ -->
    <Counter />
  </div>
</template>
<script>
import Counter from "../components/Counter.vue";
import DataTable from "datatables.net"; // Vanilla JS DataTable
import "datatables.net-bs5"; // Bootstrap 5 style for DataTables

export default {
  name: "Home",
  components: {
    Counter, // Import Counter component
  },
  mounted() {
    // Reference table element
    const table = this.$refs.dataTable;

    // Initialize DataTable
    new DataTable(table, {
      processing: true, // Show loading indicator
      serverSide: true, // Enable server-side processing
      ajax: {
        url: "https://jsonplaceholder.typicode.com/users", // API endpoint
        dataSrc: "", // Response is an array (no "data" wrapper)
      },
      columns: [
        { data: "id" }, // Map JSON 'id' field
        { data: "name" }, // Map JSON 'name' field
        { data: "email" }, // Map JSON 'email' field
        { data: "phone" }, // Map JSON 'phone' field
      ],
      responsive: true, // Enable responsive mode
      paging: true, // Enable pagination
      lengthChange: true, // Allow changing rows per page
      searching: true, // Enable search input
      language: {
        paginate: {
          previous: "«",
          next: "»",
        },
        lengthMenu: "Show _MENU_ entries",
        info: "Showing _START_ to _END_ of _TOTAL_ entries",
      },
    });
  },
};
</script>
<style>
/* Add some margin for better presentation */
.table-responsive {
  margin-top: 20px;
}
</style>
