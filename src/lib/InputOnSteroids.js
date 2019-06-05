import React from 'react';
import uuid from 'uuid';

export const INPUT_TYPES = {
  TEXT: 'TEXT',
};

class InputOnSteroids extends React.Component {
  state = {
    inputItems: [{ id: uuid(), type: INPUT_TYPES.TEXT, value: 'Blbalbalba' }],
  };

  handleTextInputChange = (e, id) => {
    const { inputItems } = this.state;
    const { value } = e.target;
    const updatedInputItems = inputItems.map(item => {
      if (item.id === id) {
        return {
          ...item,
          value,
        };
      }

      return item;
    });

    this.setState({ inputItems: updatedInputItems });
  };

  renderInputItem = inputItem => {
    const { type, value, id } = inputItem;

    switch (type) {
      case INPUT_TYPES.TEXT:
        return (
          <input type="text" value={value} onChange={e => this.handleTextInputChange(e, id)} />
        );

      default:
        return null;
    }
  };

  render() {
    const { inputItems } = this.state;

    return <div>{inputItems.map(this.renderInputItem)}</div>;
  }
}

export default InputOnSteroids;

// const { classes, calculations, attributeDefinition, preselectedDataSource } = this.props;
// const { highLightEquation } = this.state;
// const { inputs } = calculations;
// const hasErrors = calculations.errors && calculations.errors.length;
// return (
//   <Fragment>
//     <ClickAwayListener onClickAway={this.handleFocusNotOnEquation}>
//       <Grid
//         item
//         xs={12}
//         className={classNames(classes.equation, {
//           [classes.focused]: highLightEquation,
//           [classes.manualError]: hasErrors,
//         })}
//       >
//         <InputLabel
//           variant="filled"
//           shrink={highLightEquation}
//           error={hasErrors}
//           className={classNames(classes.equationLabel, {
//             [classes.equationLabelFull]:
//               !highLightEquation && inputs.length === 1 && inputs[0].name === '',
//             [classes.equationLabelShrink]:
//               highLightEquation || inputs.length !== 1 || inputs[0].name !== '',
//           })}
//         >
//           Equation
//         </InputLabel>
//         {inputs.map((item, index) => {
//           if (item.inputType === chipTypes.TEXT) return this.renderInputBox(item, index);

//           return this.renderChip(item, index);
//         })}
//         <div className={classes.funcs}>
//           <Tooltip title="Type @ to add an attribute." placement="top">
//             <div onClick={() => this.handleFuncClick(chipTypes.ATTRIBUTE)}>@</div>
//           </Tooltip>
//           <Tooltip title='Type "f" to add a function.' placement="top">
//             <div onClick={() => this.handleFuncClick(chipTypes.FUNC)}>
//               <i className="material-icons">memory</i>
//             </div>
//           </Tooltip>
//         </div>
//       </Grid>
//     </ClickAwayListener>
//     {this.displayCalculationErrors()}
//     <Grid item xs={12}>
//       <Typography variant="caption" gutterBottom className={classes.note}>
//         When using constants in your equation, please remember that the calculated value is for a 5
//         minute interval
//       </Typography>
//     </Grid>
//     <EquationSettings
//       attributeDefinition={attributeDefinition}
//       preselectedDataSource={preselectedDataSource}
//     />
//   </Fragment>
// );
