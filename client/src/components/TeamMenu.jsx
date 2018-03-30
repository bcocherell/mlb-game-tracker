import React from 'react';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import Menu, { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
import API from '../utils/api';

const styles = theme => ({
  root: {
    color: '#ffffff'
  }
});

class TeamMenu extends React.Component {
  state = {
    anchorEl: null,
    mlbTeams: []
  };

  componentDidMount = () => {
    API.getAllTeams().then((res) => {
      const mlbTeams = [];
      res.data.teams.map(team => (
        mlbTeams.push({
          id: team.id,
          name: `${team.city} ${team.name}`
        })
      ));
      this.setState({mlbTeams: mlbTeams});
    });
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'fade-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          className={classes.root}
        >
          Choose a Team
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          {this.state.mlbTeams.map(team => (
            <MenuItem key={team.id} value={team.id} component={Link} to={`/team/${team.id}`}>
              {team.name}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(TeamMenu);
