<template>
  <div>
    <el-form :model="form" label-width="150px">
      <el-form-item label="攻击方攻击">
        <el-input-number v-model="form.attack" :min="0" :max="30000"/>
      </el-form-item>
      <el-form-item label="攻击方暴击强度">
        <el-input-number v-model="form.strike_val" :min="0" :max="600"/>
      </el-form-item>
      <el-form-item label="攻击方暴击伤害(%)">
        <el-input-number v-model="form.strike_mul" :min="0" :max="300"/>
      </el-form-item>
      <el-form-item label="攻击倍率(%)">
        <el-input-number v-model="form.multiply" :min="0" :max="1000"/>
      </el-form-item>
      <el-form-item label="攻击增减(%)">
        <el-input-number v-model="form.attack_buff" :min="-100" :max="400"/>
      </el-form-item>
      <el-form-item label="防御方防御">
        <el-input-number v-model="form.defend" :min="0" :max="15000"/>
      </el-form-item>
      <el-form-item label="防御方暴击抵抗">
        <el-input-number v-model="form.strike_def" :min="0" :max="600"/>
      </el-form-item>
      <el-form-item label="暴击率增减(%)">
        <el-input-number v-model="form.d_strike_rate" :min="-100" :max="400"/>
      </el-form-item>
      <el-form-item label="伤害增减(%)">
        <el-input-number v-model="form.d_damage_rate" :min="-100" :max="400"/>
      </el-form-item>
      <el-form-item label="防御增减(%)">
        <el-input-number v-model="form.defend_buff" :min="-100" :max="400"/>
      </el-form-item>
      <el-button type="primary" @click="calculate">计算</el-button>
    </el-form>
    <p/>
    <div class="result">
      <el-tag>造成伤害 {{ damage }}</el-tag>
      <p/>
      <el-progress :percentage="p_damage" :show-text="false"/>
      <p/>
      <el-tag>暴击率 {{ strike_rate }}%</el-tag>
      <p/>
      <el-progress :percentage="strike_rate" :show-text="false"/>
      <p/>
      <el-tag>暴击伤害 {{ damage_strike }}</el-tag>
      <p/>
      <el-progress :percentage="p_damage_strike" :show-text="false"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "attack",
  data() {
    return {
      form: {
        attack: 0,
        strike_val: 0,
        strike_mul: 0,
        multiply: 0,
        attack_buff: 0,
        defend: 0,
        strike_def: 0,
        d_strike_rate: 0,
        d_damage_rate: 0,
        defend_buff: 0
      },
      damage: 0,
      p_damage: 0,
      strike_rate: 0,
      damage_strike: 0,
      p_damage_strike: 0
    }
  }, methods: {
    calculate() {
      const f_attack = this.form.attack * (1 + this.form.attack_buff * 0.01);
      const f_defend = this.form.defend * (1 + this.form.defend_buff * 0.01);
      const damage_eff = 2143 / (2143 + f_defend);
      const f_strike_val = Math.max(this.form.strike_val - 0.6 * this.form.strike_def, 0);
      const strike_rate = f_strike_val / (120 + 0.8 * f_strike_val);
      const f_strike_rate = strike_rate + this.form.d_strike_rate * 0.01;
      const f_damage_rate = Math.max(1 + this.form.d_damage_rate * 0.01, 0.3);
      const damage = f_attack * this.form.multiply * 0.01 * damage_eff * f_damage_rate;
      const damage_strike = damage * this.form.strike_mul * 0.01;
      this.damage = damage.toFixed(2);
      this.p_damage = (damage / 500).toFixed(2);
      this.strike_rate = (f_strike_rate * 100).toFixed(2);
      this.damage_strike = damage_strike.toFixed(2);
      this.p_damage_strike = (damage_strike / 500).toFixed(2);
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