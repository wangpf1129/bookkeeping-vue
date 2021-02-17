<template>
  <nav class="nav-wrapper">
    <ul>
      <li>
        <router-link to="/home" active-class="selected">
          <Icon iconName="home"/>
          TODAY
        </router-link>
      </li>
      <li>
        <router-link to="/detail" active-class="selected">
          <Icon iconName="detail"/>
          明细
        </router-link>
      </li>
      <li>
        <router-link to="/statistics" active-class="selected">
          <Icon iconName="statistics"/>
          统计
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
  export default {
    name: 'Nav',
  };
</script>

<style lang="scss" scoped>
  .nav-wrapper {
    background-color: #F9FAF5;

    > ul {
      display: flex;

      > li {
        flex: 1;
        text-align: center;
        padding: 8px 0;

        .selected {
          color: #81b7aa;

          .icon {
            fill: #81b7aa
          }
        }

        .icon {
          width: 24px;
          height: 24px;
          fill: #b7bdcd;
        }

        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #b7bdcd;
        }
      }
    }
  }
</style>