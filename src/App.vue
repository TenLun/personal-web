<template>
  <header>
    <div class="wrapper">
      <img alt="Vue logo" class="logo" src="@/assets/head.jpg" width="125" height="125" />
      <nav>
        <home></home>
      </nav>
    </div>
  </header>
  <div id='contents'>
    <about></about>
  </div>
  
</template>

<style scoped>
header {
  line-height: 1.5;
  height: 100vh;
}

.logo {
  display: block;
  margin: auto;
}

nav {
  width: 100%;
  font-size: 1rem;
  margin-top: auto;
}


/*宽屏适配*/
@media (min-width: 1024px) {
  header .wrapper {
    display: flex;
    place-items: center;
    flex-wrap: wrap;
  }
  .wrapper{
    margin-top: 50%;
  }
  nav {
    text-align: center;
    font-size: 1rem;
    display: flow;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
