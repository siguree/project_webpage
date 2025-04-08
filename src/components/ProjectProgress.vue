<template>
    <div class="project-progress">
      <h2>项目进展</h2>
      
      <section>
        <h3>项目目标</h3>
        <p>这是我的研究生毕业设计项目的目标描述。</p>
      </section>
  
      <section>
        <h3>当前进度</h3>
        <ul>
          <li>任务 1：完成</li>
          <li>任务 2：进行中</li>
          <li>任务 3：待完成</li>
        </ul>
      </section>
  
      <section>
        <h3>下一步计划</h3>
        <p>在接下来的几周，我计划进行以下任务：</p>
        <ul>
          <li>任务 4</li>
          <li>任务 5</li>
        </ul>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectProgress'
  }
  </script>
  
  <style scoped>
  .project-progress {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    color: #333;
  }
  
  section {
    margin-bottom: 20px;
  }
  
  h3 {
    color: #42b983;
  }
  
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  ul li {
    background-color: #e9e9e9;
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
  }
  </style>
  