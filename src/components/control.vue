<template>
  <div>
    <el-form :model="form" label-width="150px">
      <el-form-item label="攻击方效果命中(%)">
        <el-input-number v-model="form.control_val" :min="0" :max="30000"/>
      </el-form-item>
      <el-form-item label="防御方效果抵抗(%)">
        <el-input-number v-model="form.control_def" :min="0" :max="600"/>
      </el-form-item>
      <el-form-item label="效果命中增减(%)">
        <el-input-number v-model="form.d_control_val" :min="0" :max="300"/>
      </el-form-item>
      <el-form-item label="效果抵抗增减(%)">
        <el-input-number v-model="form.d_control_def" :min="0" :max="1000"/>
      </el-form-item>
      <el-form-item label="基础概率(%)">
        <el-input-number v-model="form.base_rate" :min="-100" :max="400"/>
      </el-form-item>
      <el-button type="primary" @click="calculate">计算</el-button>
    </el-form>
    <p/>
    <div class="result">
      <el-tag>控制命中率 {{ rate }}%</el-tag>
      <p/>
      <el-progress :percentage="rate" :show-text="false"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "control",
  data() {
    return {
      form: {
        control_val: 0,
        control_def: 0,
        d_control_val: 0,
        d_control_def: 0,
        base_rate: 0
      },
      rate: 0
    }
  }, methods: {
    calculate() {
      const f_control_val = this.form.control_val + this.form.d_control_val;
      const f_control_def = this.form.control_def + this.form.d_control_def;
      const control_value = f_control_val - f_control_def;
      const control_mul = (300 + 3 * control_value) / (300 + control_value);
      const control_rate = this.form.base_rate * control_mul;
      this.rate = control_rate.toFixed(2);
    }
  }
}
</script>

<style scoped>
.el-form, .el-progress, .result {
  width: 400px;
  text-align: center;
}
</style>