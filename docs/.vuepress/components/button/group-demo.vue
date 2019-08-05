<template>
  <div>
    <a-button-group>
      <a-button>Cancel</a-button>
      <a-button type="primary">OK</a-button>
    </a-button-group>
    <a-button-group>
      <a-button disabled>L</a-button>
      <a-button disabled>M</a-button>
      <a-button disabled>R</a-button>
    </a-button-group>
    <a-button-group>
      <a-button type="primary">L</a-button>
      <a-button>M</a-button>
      <a-button>M</a-button>
      <a-button type="dashed">R</a-button>
    </a-button-group>

    <h4>With Icon</h4>
    <a-button-group>
      <a-button type="primary">
        <a-icon type="left" />Go back
      </a-button>
      <a-button type="primary">
        Go forward<a-icon type="right" />
      </a-button>
    </a-button-group>
    <a-button-group>
      <a-button type="primary" icon="home" />
      <a-button type="primary" icon="setting" />
    </a-button-group>
  </div>
</template>
