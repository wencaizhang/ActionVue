import AIcon        from './package/icon/icon';
import AInput       from './package/input/input';
import Amessage     from './package/message/message';
import AToast       from './package/toast/plugin';
import AButton      from './package/button/button';
import AButtonGroup from './package/button/button-group';
import ASkeleton    from './package/skeleton/skeleton';
import ACol         from './package/grid/col';
import ARow         from './package/grid/row';
import ASticky      from './package/sticky/sticky'
import APager       from './package/pager/pager';
import AImage       from './package/Image/main';
import ABackTop     from './package/back-top/main';
import ATabs        from './package/tabs/tabs';
import ATabItem     from './package/tabs/tab-item';
import ASwipe       from './package/swipe/swipe';
import ASwipeItem   from './package/swipe/swipe-item';
import ALayout         from './package/layout/layout';
import ALayoutHeader   from './package/layout/layout-header';
import ALayoutSider    from './package/layout/layout-sider';
import ALayoutContent  from './package/layout/layout-content';
import ALayoutFooter   from './package/layout/layout-footer';
import ASwitch         from './package/switch/switch';
import APopover        from './package/popover/popover';
import AGithubCorner   from './package/github-corner/main';
import ASpin           from './package/spin/main';
import './package/transition/main.css';

// 定义我们的插件
export default {
  install(Vue) {
    Vue.use(AToast)
    Vue.component('AIcon', AIcon);
    Vue.component('AInput', AInput);
    Vue.component('AButton', AButton);
    Vue.component('AButtonGroup', AButtonGroup);
    Vue.component('ACol', ACol);
    Vue.component('ARow', ARow);
    Vue.component('ASkeleton', ASkeleton);
    Vue.component('ASticky', ASticky);
    Vue.component('APager', APager);
    Vue.component('AImage', AImage);
    Vue.component('ABackTop', ABackTop);
    Vue.component('ATabs', ATabs);
    Vue.component('ATabItem', ATabItem);
    Vue.component('ASwipe', ASwipe);
    Vue.component('ASwipeItem', ASwipeItem);

    Vue.component('ALayout', ALayout);
    Vue.component('ALayoutHeader', ALayoutHeader);
    Vue.component('ALayoutSider', ALayoutSider);
    Vue.component('ALayoutContent', ALayoutContent);
    Vue.component('ALayoutFooter', ALayoutFooter);
    
    Vue.component('ASwitch', ASwitch);
    Vue.component('APopover', APopover);
    Vue.component('AGithubCorner', AGithubCorner);
    Vue.component('ASpin', ASpin);

    Vue.prototype.$message = Amessage;
  }
};
