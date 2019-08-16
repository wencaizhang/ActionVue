# Popover 气泡卡片


## 位置

<Common-Democode>
  <popover-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
    <div id="components-popover-demo-position">
      <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
        <a-popover position="topLeft">
          <template slot="content">
            <p>Content</p>
            <p>Content</p>
          </template>
          <template slot="title">
            <span>Title</span>
          </template>
          <a-button>TL</a-button>
        </a-popover>
        <a-popover position="top">
          <template slot="content">
            <p>Content</p>
            <p>Content</p>
          </template>
          <template slot="title">
            <span>Title</span>
          </template>
          <a-button>Top</a-button>
        </a-popover>
        <a-popover position="topRight">
          <template slot="content">
            <p>Content</p>
            <p>Content</p>
          </template>
          <template slot="title">
            <span>Title</span>
          </template>
          <a-button>TR</a-button>
        </a-popover>
      </div>
      <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
        <a-popover position="leftTop">
          <template slot="content">
            <p>Content</p>
            <p>Content</p>
          </template>
          <template slot="title">
            <span>Title</span>
          </template>
          <a-button>LT</a-button>
        </a-popover>
        <a-popover position="left">
          <template slot="content">
            <p>Content</p>
            <p>Content</p>
          </template>
          <template slot="title">
            <span>Title</span>
          </template>
          <a-button>Left</a-button>
        </a-popover>
        <a-popover position="leftBottom">
          <template slot="content">
            <p>Content</p>
            <p>Content</p>
          </template>
          <template slot="title">
            <span>Title</span>
          </template>
          <a-button>LB</a-button>
        </a-popover>
      </div>
      <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24 }px`}">
        <a-popover position="rightTop">
          <template slot="content">
            <p>Content</p>
            <p>Content</p>
          </template>
          <template slot="title">
            <span>Title</span>
          </template>
          <a-button>RT</a-button>
        </a-popover>
        <a-popover position="right">
          <template slot="content">
            <p>Content</p>
            <p>Content</p>
          </template>
          <template slot="title">
            <span>Title</span>
          </template>
          <a-button>Right</a-button>
        </a-popover>
        <a-popover position="rightBottom">
          <template slot="content">
            <p>Content</p>
            <p>Content</p>
          </template>
          <template slot="title">
            <span>Title</span>
          </template>
          <a-button>RB</a-button>
        </a-popover>
      </div>
      <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
        <a-popover position="bottomLeft">
          <template slot="content">
            <p>Content</p>
            <p>Content</p>
          </template>
          <template slot="title">
            <span>Title</span>
          </template>
          <a-button>BL</a-button>
        </a-popover>
        <a-popover position="bottom">
          <template slot="content">
            <p>Content</p>
            <p>Content</p>
          </template>
          <template slot="title">
            <span>Title</span>
          </template>
          <a-button>Bottom</a-button>
        </a-popover>
        <a-popover position="bottomRight">
          <template slot="content">
            <p>Content</p>
            <p>Content</p>
          </template>
          <template slot="title">
            <span>Title</span>
          </template>
          <a-button>BR</a-button>
        </a-popover>
      </div>
    </div>
    </template>
    <script>
    export default {
      data () {
        return {
          buttonWidth: 70,
        }
      },
    }
    </script>
    <style>
    #components-popover-demo-position .a-button {
      width: 70px;
      text-align: center;
      padding: 0;
      margin-right: 8px;
      margin-bottom: 8px;
      /* margin: 0; */
    }
    </style>
  </highlight-code>
</Common-Democode>


## 两种触发方式


<Common-Democode>
  <popover-demo3 />
  <highlight-code slot="codeText" lang="vue">
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
  </highlight-code>
</Common-Democode>