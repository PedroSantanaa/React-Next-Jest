const { render, screen } = require('@testing-library/react');
const { PostCard } = require('.');
const { PostCardPropsMock } = require('./mock');

const props = PostCardPropsMock;

describe('<PostCard/>', () => {
  it('should render PostCArd correctly', () => {
    // render(<PostCard title="algo" cover="url" body="Some text" id="1" />);
    render(<PostCard {...props} />);

    expect(screen.getByRole('img', { name: /TITLE1/i })).toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole('heading', { name: 'title1 1' })).toBeInTheDocument();
    expect(screen.getByText('body1')).toBeInTheDocument();
  });
  it('should match the snapshot', () => {
    // render(<PostCard title="algo" cover="url" body="Some text" id="1" />);
    const { container } = render(<PostCard {...props} />);
    expect(container).toMatchSnapshot();
  });
});
