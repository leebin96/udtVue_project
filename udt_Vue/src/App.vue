<template>
  <v-app>
    <Header />
    <Sale />
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
import HeaderComponent from '@/components/header.vue';
import SaleComponent from '@/components/sale.vue';
import FooterComponent from '@/components/footer.vue';

export default {
  components: {
    Header: HeaderComponent,
    Sale: SaleComponent,
    Footer: FooterComponent,
  },
};
</script>
