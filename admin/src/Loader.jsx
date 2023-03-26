import React, { memo } from 'react';

import { Spin } from 'antd';

const Loader = memo(() => {
    return (
      <div className='spin'>
        <Spin />
      </div>
    );
});

export default Loader;
