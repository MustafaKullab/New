<template>
  <div class="HomePage">
    <div class="container-fluid">
      <div class="row m-5 p-3 rounded-3 bg-white">
        <div class="col-md-5 col-xl-4 p-0">
          <SideBar />
        </div>
        <div class="col-md-7">
          <div class="box yourInfo">
            <div class="title mt-5">
              <h1>Personal info</h1>
              <p class="subtitle">Please provide your name, email address, and phone number.</p>
            </div>
            <form class="my-5">
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" placeholder="e.g.stephen king" />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="e.g.stephenking@lorem.com"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Phone Number</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="e.g. +1 234 567 89"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from "@/components/SideBar.vue";
</script>

<style lang="scss" scoped>
.box {
  h1 {
    color: #052852 !important;
  }
  .subtitle {
    color: #a1a1a9 !important;
  }
  form {
    > div {
      label {
        color: #052852;
        font-weight: bold;
      }
    }
  }
}
</style>
