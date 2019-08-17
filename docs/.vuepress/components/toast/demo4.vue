<template>
  <div>
    <a-button @click="onClick">解析HTML</a-button>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$toast({
        message: `
          <div class="toast-demo-html">
            <p>给你我的小心心</p>
            <svg xmlns="https://www.w3.org/2000/svg"
              xmlns:xlink="https://www.w3.org/1999/xlink"
              version="1.1" id="Capa_1" x="0px" y="0px" width="50px" height="50px"
              viewBox="0 0 60 60" style="enable-background:new 0 0 50 50;"
              xml:space="preserve" width="512px" height="512px"
            >
              <g id="heart">
                <path style="fill:#C03A2B;" d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543  c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503  c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"
                  />
                <path style="fill:#ED7161;" d="M6,18.078c-0.553,0-1-0.447-1-1c0-5.514,4.486-10,10-10c0.553,0,1,0.447,1,1s-0.447,1-1,1  c-4.411,0-8,3.589-8,8C7,17.631,6.553,18.078,6,18.078z" />
              </g>
            </svg>
          </div>
        `,
        enableHtml: true,
        autoClose: false,
        closeText: "收下",
        onClose () {
          this.$toast('每一颗心都是易碎品，请妥善保管！')
        }
      });
    }
  }
};
</script>

<style>
.toast-demo-html {
  text-align: center;
}
.toast-demo-html svg {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
#heart {
  animation-name: beat;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
}
@keyframes beat {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
