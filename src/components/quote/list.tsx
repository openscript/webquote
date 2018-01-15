import {Avatar, List, ListItem} from 'material-ui';
import FileIcon from 'material-ui/svg-icons/editor/insert-drive-file';
import * as React from 'react';
import {Quote} from '../../models/quote';

interface Props {
    quotes: Quote[];
    onQuoteSelect: (title: string) => void;
}

export class QuoteList extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);

        this.createOnClickHandler = this.createOnClickHandler.bind(this);
    }

    public render() {
        return (
            <List>
                {this.props.quotes.map((quote) => (
                    <ListItem
                        key={quote.title}
                        leftAvatar={<Avatar icon={<FileIcon />}/>}
                        primaryText={quote.title}
                        onClick={this.createOnClickHandler(quote.title)}
                    />
                ))}
            </List>
        );
    }

    private createOnClickHandler(title: string) {
        return () => {
            this.props.onQuoteSelect(title);
        };
    }
}
