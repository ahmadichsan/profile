import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { defaultErrorAlertConfig } from '../../constants';
import { previewImageApi } from './PreviewImage.constants';
import { PreviewImageProps } from './PreviewImage.interfaces';
import { showSweetAlert } from '../../redux-global/Global.actions';
import { HttpService } from '../../helpers';
import './PreviewImage.scss';

export default function PreviewImage(props: PreviewImageProps) {
  const dispatch = useDispatch();
  const { fileName, className } = props;

  const [imgSrc, setImgSrc] = useState('');
  const [isLoading, setLoading] = useState(true);

  const toggleLoading = () => setLoading(false);

  useEffect(() => {
    const fetchImg = async () => {
      try {
        const result = await HttpService.get(`${previewImageApi}/${fileName}`);

        const link = result.data;

        setImgSrc(link);
      } catch (error) {
        const errorMessage = error.message;
        dispatch(showSweetAlert({ ...defaultErrorAlertConfig, children: errorMessage }));
      }
    };

    fetchImg();
  }, [fileName, dispatch]);

  if (!imgSrc) return <div className={className} id="loading-preview" />;

  return (
    <>
      <div className={isLoading ? 'display-block' : 'display-none'}>
        <div className={className} id="loading-preview" />
      </div>
      <div className={isLoading ? 'display-none' : 'display-block'}>
        <img src={imgSrc} alt={fileName} className={className} onLoad={toggleLoading} />
      </div>
    </>
  );
}

PreviewImage.propTypes = {
  fileName: PropTypes.string.isRequired,
  className: PropTypes.string,
};

PreviewImage.defaultProps = {
  className: 'preview-image'
};
