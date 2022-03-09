<template>
    <div class="wrapper">

      <router-view></router-view>

        <!-- HeaderNavSix section -->
        <HeaderNavSix></HeaderNavSix>

        <div class="main-content">

            <!-- Breadcrumb section -->
            <Breadcrumb breadcrumbTitle="Register" breadcrumbName="Register"></Breadcrumb>

            <!-- Register section -->
            <RegisterSection></RegisterSection>

        </div>

        <!-- Section -->
        <!-- <NewsletterFour newslatterFour="newsletter-area style-4 newsletter-space-y-axis"></NewsletterFour> -->

        <!-- Footer section -->
        <FooterSectionFive class="space-top-140"></FooterSectionFive>

    </div>
</template>

<script>
import HeaderNavSix from '@/components/HeaderNavSix.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import RegisterSection from '@/components/RegisterSection.vue'
import NewsletterFour from '@/components/NewsletterFour.vue'
import FaqSectionTwo from '@/components/FaqSectionTwo.vue'
import FooterSectionFive from '@/components/FooterSectionFive.vue'

export default {
  components: {
    HeaderNavSix,
    Breadcrumb,
    RegisterSection,
    NewsletterFour,
    FaqSectionTwo,
    FooterSectionFive
  }
}
</script>