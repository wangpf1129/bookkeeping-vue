<template>
  <div class="tags-wrapper">
    <ol>
      <li>
        <Icon iconName='1'/>
          <span>餐饮</span>
      </li>
      <li>
        <Icon iconName='2'/>
        <span>娱乐</span>
      </li>
      <li>
        <Icon iconName='3'/>
        <span>日用</span>
      </li>
      <li>
        <Icon iconName='4'/>
        <span>通讯</span>
      </li>
      <li>
        <Icon iconName='5'/>
        <span>果蔬</span>
      </li>
      <li>
        <Icon iconName='6'/>
        <span>汽车</span>
      </li>
      <li>
        <Icon iconName='7'/>
        <span>烟酒</span>
      </li>
      <li>
        <Icon iconName='8'/>
        <span>数码</span>
      </li>
      <li>
        <Icon iconName="set"/>
        <span>
          <router-link to='xxx'>设置</router-link>
         </span>
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'TagsSection'
  };
</script>

<style lang="scss" scoped>
.tags-wrapper{
  padding: 20px 38px;
  >ol {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin-right: -24px;
    >li{
      width: 20%;
      background-color:#fff;
      border-radius: 10px;
      box-shadow: 2px 3px 4px #ddd;
      padding: 10px 12px;
      margin-top: 24px;
      margin-right: 12px;
      display:flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      font-size: 12px;
      >span{padding-top: 5px}
      .icon{
        width: 28px;
        height: 28px;
        fill:rgba(0,0,0,.6)
      }
    }
    .selected{
      background-color:#a1ddd4;
      box-shadow: 1px 2px 2px #ddd;
    }
  }
}
</style>