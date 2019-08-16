<template>
  <div>
    <a-popover position="top" trigger="click">
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
      <template slot="title">
        <span>Title</span>
      </template>
      <a-button>click</a-button>
    </a-popover>
    <a-popover position="top" trigger="hover">
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
      <template slot="title">
        <span>Title</span>
      </template>
      <a-button>hover</a-button>
    </a-popover>
  </div>
</template>
