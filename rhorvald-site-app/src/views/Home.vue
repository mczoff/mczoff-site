<template>
  <div>
    <AboutMe/>
    <Skills/>
    <Experience/>
    <Research/>
    <Languages/>
    <interests/>
    <Contacts/>
  </div>
</template>

<script>
  import Experience from "../components/Experience";
  import Skills from "../components/Skills";
  import Contacts from "../components/Contacts";
  import Research from "../components/Research";
  import Languages from "../components/Languages";
  import Interests from "../components/Interests";
  import AboutMe from "../components/AboutMe";

  export default {
    components: {
      AboutMe,
      Interests,
      Languages,
      Research,
      Contacts,
      Skills,
      Experience,
    }
  }
</script>
