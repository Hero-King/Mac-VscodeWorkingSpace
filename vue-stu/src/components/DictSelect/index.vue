<template>
  <span>
    <template v-if="type === 'select'">
      <el-select v-bind="$attrs" v-on="$listeners" :size="size" :popper-append-to-body="false">
        <el-option
          v-for="item in viewOptions"
          :label="labelKey ? item[labelKey] : item"
          :value="valueKey ? item[valueKey] : item"
          :key="_forKey ? item[_forKey] : item"
        >
          <slot :optItem="item"></slot>
        </el-option>
      </el-select>
    </template>
    <template v-else-if="type === 'input'">
      <el-input v-bind="$attrs" v-on="$listeners" :size="size"> </el-input>
    </template>
    <template v-else-if="type === 'checkbox'">
      <el-checkbox-group v-bind="$attrs" v-on="$listeners" :size="size">
        <el-checkbox v-for="item in viewOptions" :key="_forKey ? item[_forKey] : item" :label="valueKey ? item[valueKey] : item" :disabled="item.disabled">
          <slot :optItem="item">
            {{ labelKey ? item[labelKey] : item }}
          </slot>
        </el-checkbox>
      </el-checkbox-group>
    </template>
    <template v-else-if="type === 'checkboxButton'">
      <el-checkbox-group v-bind="$attrs" v-on="$listeners" :size="size">
        <el-checkbox-button
          v-for="item in viewOptions"
          :key="_forKey ? item[_forKey] : item"
          :label="valueKey ? item[valueKey] : item"
          :disabled="item.disabled"
        >
          <slot :optItem="item">
            {{ labelKey ? item[labelKey] : item }}
          </slot>
        </el-checkbox-button>
      </el-checkbox-group>
    </template>
    <template v-else-if="type === 'radio'">
      <el-radio-group v-bind="$attrs" v-on="$listeners" :size="size">
        <el-radio v-for="item in viewOptions" :key="_forKey ? item[_forKey] : item" :label="valueKey ? item[valueKey] : item" :disabled="item.disabled">
          <slot :optItem="item">
            {{ labelKey ? item[labelKey] : item }}
          </slot>
        </el-radio>
      </el-radio-group>
    </template>
    <template v-else-if="type === 'radioButton'">
      <el-radio-group v-bind="$attrs" v-on="$listeners" :size="size">
        <el-radio-button v-for="item in viewOptions" :key="_forKey ? item[_forKey] : item" :label="valueKey ? item[valueKey] : item" :disabled="item.disabled">
          <slot :optItem="item">
            {{ labelKey ? item[labelKey] : item }}
          </slot>
        </el-radio-button>
      </el-radio-group>
    </template>
    <template v-else>
      <component :is="type" v-bind="$attrs" v-on="$listeners" :size="size"></component>
    </template>
  </span>
</template>
<script>
export default {
  name: 'DictSelect',
  props: {
    size: {
      type: String,
      default: 'small'
    },
    type: {
      type: String,
      default: 'select'
    },
    options: {
      type: Array
    },
    dictUrl: String,
    labelKey: {
      type: String,
      default: 'label'
    },
    valueKey: {
      type: String,
      default: 'value'
    },
    resultKey: {
      type: String,
      default: 'data'
    },
    methods: {
      type: String,
      default: 'get'
    },
    params: {
      type: Object,
      default: () => ({})
    },
    resultFormat: Function
  },
  data() {
    return {
      innerOptions: []
    }
  },
  computed: {
    _forKey() {
      return this.forKey || this.valueKey || this.labelKey
    },
    viewOptions() {
      return this.options ?? this.innerOptions
    }
  },
  created() {
    if (this.viewOptions?.length > 0) {
      return
    }
    this.getDicts()
  },
  methods: {
    getDicts() {
      const { dictUrl, params, methods } = this
      this.$http[methods](dictUrl, params)
        .then((res) => {
          if (res.code === 0 || res.success) {
            console.log(res)
            let result = res[this.resultKey] || this.resultFormat(res)
            this.innerOptions = result
            // let cloneData = JSON.parse(JSON.stringify(result))
            this.$emit('update:options', this.innerOptions)
            this.$emit('getSuccess', this.innerOptions)
          } else {
            throw res.msg || res.message
          }
        })
        .catch((err) => {
          console.log(err)
          this.$message.error(err)
        })
    }
  }
}
</script>
<style lang=""></style>
