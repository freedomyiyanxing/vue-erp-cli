<template>
  <div></div>
</template>

<script>
export default {
  name: 'authredirect',
  created() {
    window.close();
    const { state, code } = this.$route.query;
    window.opener.location.href = `${window.location.origin}/#/login?state=${state}&code=${code}`;
  },
};
</script>
