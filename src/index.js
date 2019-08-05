import AIcon        from './package/icon/icon';
import AInput       from './package/input/input';
import Amessage     from './package/message/message';
import AToast       from './package/toast/plugin';
import AButton      from './package/button/button';
import AButtonGroup from './package/button/button-group';
import ASkeleton    from './package/skeleton/skeleton';
import ACol         from './package/Grid/col';
import ARow         from './package/Grid/row';
import ASticky      from './package/sticky/sticky'
import APager       from './package/pager/pager';
import AImage       from './package/Image/main';

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

    Vue.prototype.$message = Amessage;
  }
};
