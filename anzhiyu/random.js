var posts=["2025/05/24/hello-world/","2025/05/24/Docker快速入门/","2025/05/24/Docker部署Nginx/","2024/03/24/Nginx使用指南/","2024/03/24/Docker部署前端项目/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };