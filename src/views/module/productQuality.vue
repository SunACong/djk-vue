<template>
  <div>
    <BarChart />
  </div>
</template>

<script>
import BarChart from '@/views/dashboard/BarChart'
export default {
  name: 'ProductQuality',
  components: { BarChart },
  data() {
    return {
      yang: {
        expectedData: [100, 120, 161, 134, 105, 1600, 165],
        actualData: [120, 82, 91, 154, 162, 140, 145]
      }
    }
  },
  watch: {
  },

  methods: {
  }
}
</script>

