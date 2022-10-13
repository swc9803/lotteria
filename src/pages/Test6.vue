<template>
  <div class="table-wrapper">
    <table>
      <caption>
        다짐을 해보세요
      </caption>
      <thead>
        <tr>
          <th>이름</th>
          <th>다짐</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>아아</td>
          <td>나나</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.table-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #edf2f7;
  caption {
    background: #dee2e6;
  }
  table {
    width: 70%;
    border: 1px solid #e2e8f0;
    background: white;
    text-align: center;
  }
}
</style>
