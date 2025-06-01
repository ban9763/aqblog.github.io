var posts=["2025/05/24/Docker快速入门/","2024/03/24/Docker部署前端项目/","2025/05/24/Docker部署Nginx/","2024/03/24/Nginx使用指南/","2025/05/24/hello-world/","2025/05/27/nodejs/","2025/05/27/NVM的安装与命令/","2025/05/27/commonjs的实现原理/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };