<template>
  <div>
    <v-form-render ref="vFormRef" :form-json="formJson" :form-data="formData" :option-data="optionData" />
  </div>
</template>
<script>
export default {
  props: {
    formJson: {
      type: Object,
      default: function() {
        return {}
      }
    },
    formData: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      optionData: {}
    }
  },
  watch: {
    formData: {
      handler: function(val, oldVal) {
        this.formData = val
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
  }
}
</script>
