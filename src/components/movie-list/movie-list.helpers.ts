import { Modal } from 'antd';
import { t } from 'i18next';

export const handleOpenModal = (id: string, title: string): void => {
  Modal.confirm({
    title: `${t('movie-list-redirect-form.information')} ${title}`,
    content: t('movie-list-redirect-form.warning'),
    icon: '',
    okText: t('accept'),
    cancelText: t('cancel'),
    width: 700,
    centered: true,
    onOk: () => window.location.replace(`https://www.imdb.com/title/${id}/`),
    okButtonProps: { danger: false, type: 'default' }
  });
};
