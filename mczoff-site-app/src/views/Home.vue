<template>
  <div>
    <AboutMe/>
    <Projects/>
    <Experience/>
    <Research/>
    <Languages/>
    <interests/>
    <Contacts/>
  </div>
</template>

<script>
  import Experience from "../components/Experience";
  import Projects from "../components/Projects";
  import Contacts from "../components/Contacts";
  import Research from "../components/Research";
  import Languages from "../components/Languages";
  import Interests from "../components/Interests";
  import AboutMe from "../components/AboutMe";

  export default {
    components: {
      AboutMe,
      Projects,
      Interests,
      Languages,
      Research,
      Contacts,
      Experience,
    }
  }
</script>
