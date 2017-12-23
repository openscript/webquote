import {Avatar, List, ListItem} from 'material-ui';
import FileFolder from 'material-ui/svg-icons/file/folder';
import * as React from 'react';
import {Definition} from '../../models/definition';

interface Props {
    definitions: Definition[];
    onDefinitionSelect: (name: string) => void;
}

export class DefinitionList extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);

        this.createOnClickHandler = this.createOnClickHandler.bind(this);
    }

    public render() {
        return (
            <List>
                {this.props.definitions.map((definition) => (
                    <ListItem
                        key={definition.name}
                        leftAvatar={<Avatar icon={<FileFolder />}/>}
                        primaryText={definition.name}
                        onClick={this.createOnClickHandler(definition.name)}
                    />
                ))}
            </List>
        );
    }

    private createOnClickHandler(name: string) {
        return () => {
            this.props.onDefinitionSelect(name);
        };
    }
}
