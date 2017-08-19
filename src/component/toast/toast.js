import Notification from 'rc-notification';
import React from 'react';
import ReactDOM from 'react-dom';
import style from './toast.css';
import SuccessIcon from './success.svg';
import failIcon from './fail.svg';
import LoadingIcon from './loading.svg';
const notification = Notification.newInstance({});

function showLoading(key, contentText) {
    notification.notice({
        key: key,
        content: <div className={style.jt_toastMask}>
            <div className={style.jt_img_divContainer}>
                <img className={style.jt_loading_img} src={LoadingIcon} />
                <div className={style.jt_loadingText}>{contentText}</div>
            </div>
        </div>,
        duration: null

    });
}
function showToast(key, iconType, duration, contentText) {
    let icon = iconType == "success" ? SuccessIcon : failIcon;
    notification.notice({
        key: key,
        content: <div className={style.jt_toastMask}>
            <div className={style.success_divContainer}>
                <img className={style.success_Img} src={icon} />
                <div className={style.successText}>{contentText}</div>
            </div>
        </div>,
        duration: duration,
        onClose() {
      console.log('closable close');
    },
    closable: true,
    });
}
function hideToast(key) {
    notification.removeNotice(key);
}
export {
    showLoading, hideToast, showToast

}