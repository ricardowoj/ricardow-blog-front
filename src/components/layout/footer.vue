<template>
  <div style="height: 60px !important">
    <v-card fixed app color="primary" dark flat class="footer">
      <v-container>
        <v-row style="margin:1px;">
          <div class="d-flex align-center justify-space-between mr-10">
            <div class="rounded-social-buttons">
              <a class="social-button linkedin" href="https://www.linkedin.com/in/ricardo-wojciechowski/" target="_blank"><i class="fab fa-linkedin"></i></a>
            </div>
            <div class="text-center">
              Copyright &copy;
              <a
                  class="white--text"
                  href="https://ricardow.com"
                  rel="noopener noreferrer"
                  target="_blank"
              >https://ricardow.com</a
              >
              {{ new Date().getFullYear() }}. All rights reserved.
            </div>
          </div>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
<style>
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  body {
    background: #D0D8DB;
    padding-top: 60px;
    padding-bottom: 40px;
  }

  textarea {
    resize: none;
  }

  .text {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    white-space: nowrap;
  }

  .svg-inline--fa {
    vertical-align: -0.200em;
  }

  .rounded-social-buttons {
    text-align: center;
  }

  .rounded-social-buttons .social-button {
    display: inline-block;
    position: relative;
    cursor: pointer;
    width: 1.825rem;
    height: 1.825rem;
    border: 0.125rem solid transparent;
    padding: 2px;
    text-decoration: none;
    text-align: center;
    color: #fefefe;
    font-size: 0.5625rem;
    font-weight: normal;
    line-height: 2em;
    border-radius: 1.6875rem;
    transition: all 0.5s ease;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }

  .rounded-social-buttons .social-button:hover, .rounded-social-buttons .social-button:focus {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }

  .rounded-social-buttons .fa-twitter, .fa-facebook-f, .fa-linkedin, .fa-youtube, .fa-instagram {
    font-size: 20px;
  }

  .rounded-social-buttons .social-button.facebook {
    background: #3b5998;
  }

  .rounded-social-buttons .social-button.facebook:hover, .rounded-social-buttons .social-button.facebook:focus {
    color: #3b5998;
    background: #fefefe;
    border-color: #3b5998;
  }

  .rounded-social-buttons .social-button.twitter {
    background: #55acee;
  }

  .rounded-social-buttons .social-button.twitter:hover, .rounded-social-buttons .social-button.twitter:focus {
    color: #55acee;
    background: #fefefe;
    border-color: #55acee;
  }

  .rounded-social-buttons .social-button.linkedin {
    background: #007bb5;
  }

  .rounded-social-buttons .social-button.linkedin:hover, .rounded-social-buttons .social-button.linkedin:focus {
    color: #007bb5;
    background: #fefefe;
    border-color: #007bb5;
  }

  .rounded-social-buttons .social-button.youtube {
    background: #bb0000;
  }

  .rounded-social-buttons .social-button.youtube:hover, .rounded-social-buttons .social-button.youtube:focus {
    color: #bb0000;
    background: #fefefe;
    border-color: #bb0000;
  }

  .rounded-social-buttons .social-button.instagram {
    background: #125688;
  }

  .rounded-social-buttons .social-button.instagram:hover, .rounded-social-buttons .social-button.instagram:focus {
    color: #125688;
    background: #fefefe;
    border-color: #125688;
  }
</style>
