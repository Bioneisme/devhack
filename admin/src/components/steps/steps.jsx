import React, { useEffect, useState } from 'react';
import { Row, Col, Button, message } from 'antd';
import PropTypes from 'prop-types';
import FeatherIcon from 'feather-icons-react';
import { StepsStyle, ActionWrapper } from './style';

const { Step } = StepsStyle;

const Steps = ({
  isvertical,
  validation,
  size,
  current,
  direction,
  status,
  progressDot,
  steps,
  isswitch,
  navigation,
  onNext,
  onPrev,
  onDone,
  onChange,
  children,
  height,
  isfinished,
  validationStatus,
}) => {
  const [state, setState] = useState({
    currents: current,
  });
  useEffect(() => {
    if (validation) {
      const currentStep = state.currents + 1;
      setState({ currents: currentStep });
      onNext(currentStep);

      Promise.resolve(true).then(function resolve() {
        setTimeout(validationStatus, [300]);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validation]);
  const next = () => {
    onNext(state.currents);
  };

  const prev = () => {
    const currents = state.currents - 1;
    setState({ currents });
    onPrev(currents);
  };

  const { currents } = state;

  const stepStyle = {
    marginBottom: 60,
    boxShadow: '0px -1px 0 0 #e8e8e8 inset',
  };

  const onChanges = curr => {
    setState({ currents: curr });
    if (onChange) onChange(curr);
  };

  return !isswitch ? (
    <StepsStyle
      type={navigation && 'navigation'}
      style={navigation && stepStyle}
      size={size}
      current={navigation ? currents : current}
      direction={direction}
      status={status}
      progressDot={progressDot}
      onChange={onChanges}
    >
      {children}
    </StepsStyle>
  ) : (
    <>
      <StepsStyle current={currents} direction={direction} status={status} progressDot={progressDot} size={size}>
        {steps !== undefined &&
          steps.map(item => (
            <Step
              className={item.className && item.className}
              icon={item.icon && item.icon}
              key={item.title}
              title={item.title}
            />
          ))}
      </StepsStyle>
      {isvertical ? (
        <div className="steps-wrapper">
          <div
            className="steps-content"
            style={{ minHeight: height, display: 'flex', justifyContent: 'center', marginTop: 100 }}
          >
            {steps[state.currents].content}
          </div>

          {!isfinished && (
            <ActionWrapper>
              <div className="step-action-wrap">
                <div className="step-action-inner">
                  <Row>
                    <Col xs={24}>
                      <div className="steps-action">
                        {state.currents > 0 && (
                          <Button className="btn-prev" type="light" onClick={() => prev()}>
                            <FeatherIcon icon="arrow-left" size={16} />
                            Previous
                          </Button>
                        )}

                        {state.currents < steps.length - 1 && (
                          <Button className="btn-next" type="primary" onClick={() => next()}>
                            Save & Next
                            <FeatherIcon icon="arrow-right" size={16} />
                          </Button>
                        )}

                        {state.currents === steps.length - 1 && (
                          <Button type="primary" onClick={onDone}>
                            Done
                          </Button>
                        )}
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </ActionWrapper>
          )}
        </div>
      ) : (
        <>
          <div
            className="steps-content"
            style={{ minHeight: height, display: 'flex', justifyContent: 'center', marginTop: 100 }}
          >
            {steps[state.currents].content}
          </div>

          {!isfinished && (
            <ActionWrapper>
              <div className="step-action-wrap">
                <div className="step-action-inner">
                  <Row>
                    <Col xs={24}>
                      <div className="steps-action">
                        {state.currents > 0 && (
                          <Button className="btn-prev" type="light" onClick={() => prev()}>
                            <FeatherIcon icon="arrow-left" size={16} />
                            Previous
                          </Button>
                        )}

                        {state.currents < steps.length - 1 && (
                          <Button className="btn-next" type="primary" onClick={() => next()}>
                            Save & Next
                            <FeatherIcon icon="arrow-right" size={16} />
                          </Button>
                        )}

                        {state.currents === steps.length - 1 && (
                          <Button type="primary" onClick={onDone}>
                            Done
                          </Button>
                        )}
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </ActionWrapper>
          )}
        </>
      )}
    </>
  );
};

Steps.defaultProps = {
  current: 0,
  height: 150,
  onDone: () => message.success('Processing complete!'),
  isfinished: false,
};

Steps.propTypes = {
  isvertical: PropTypes.bool,
  size: PropTypes.string,
  current: PropTypes.number,
  direction: PropTypes.string,
  status: PropTypes.string,
  progressDot: PropTypes.func,
  steps: PropTypes.arrayOf(PropTypes.object),
  isswitch: PropTypes.bool,
  navigation: PropTypes.bool,
  isfinished: PropTypes.bool,
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
  onDone: PropTypes.func,
  onChange: PropTypes.func,
  height: PropTypes.number,
  validationStatus: PropTypes.func,
  validation: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.node, PropTypes.string]),
};

export { Step, Steps };
