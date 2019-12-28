import AIcon        from './package/icon/index';
import AInput       from './package/input/index';
import Amessage     from './package/message/index';
import ANotification     from './package/notification/plugin';
import AToast       from './package/toast/plugin';
import AButton      from './package/button/button';
import AButtonGroup from './package/button/button-group';
import ASkeleton    from './package/skeleton/index';
import ACol         from './package/grid/col';
import ACollapse    from './package/collapse/collapse'
import ACollapseItem    from './package/collapse/collapse-item'
import ARow         from './package/grid/row';
import ASticky      from './package/sticky/index'
import APager       from './package/pager/index';
import AImage       from './package/image/index';
import ABackTop     from './package/back-top/index';
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
import ASteps           from './package/steps/main';
import './package/transition/main.css';

// 定义我们的插件
export default {
  install(Vue) {
    Vue.use(AToast)
    Vue.use(ANotification);
    Vue.component('AIcon', AIcon);
    Vue.component('AInput', AInput);
    Vue.component('AButton', AButton);
    Vue.component('AButtonGroup', AButtonGroup);
    Vue.component('ACol', ACol);
    Vue.component('ACollapse', ACollapse);
    Vue.component('ACollapseItem', ACollapseItem);
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
    Vue.component('ASteps', ASteps);

    Vue.prototype.$message = Amessage;
  }
};
