export default function PlayerInfo(props) {
  return (
    <div>
      { props.id } {props.firstname} {props.lastname} {props.feet? props.feet : `no height`} {props.inches}
    </div>
  );
}