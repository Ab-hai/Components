import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {

const [showModal , setShowModal] = useState(false);


const handleClick = () =>{
    setShowModal(true)
};

const handleClose = () =>{
setShowModal(false)
};

const actionBar = <div>
    <Button onClick={handleClose} primary >I Accpettt!!</Button>
</div>

const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>
        Accep thisssssssssss!!!!!!!!!!!
    </p>
    </Modal>

    return (<div className="relative">
         <Button onClick={handleClick} primary>Open Modal</Button>
         {showModal && modal }
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies lorem non metus tempor, sit amet malesuada nisi ornare. Morbi vel tellus risus. Quisque vel quam pellentesque augue ornare venenatis sed at augue. Praesent id metus rutrum, lacinia mauris in, vulputate arcu. Integer vestibulum risus enim. Phasellus euismod lectus tortor, non tempus nisl tincidunt id. Nullam eleifend in neque eget cursus. Donec porta lorem in dui fringilla faucibus. In et metus at diam posuere volutpat. Sed bibendum elit lorem, quis blandit magna dignissim at. Morbi magna orci, condimentum sed tortor eu, laoreet sodales mauris. Proin ullamcorper, nisl nec pretium mattis, erat arcu gravida dolor, suscipit finibus nisi purus non ipsum. Sed tincidunt, justo eu lacinia volutpat, nisi justo lacinia nisl, vehicula tincidunt sapien ipsum et velit. Maecenas ligula neque, semper sed dignissim sit amet, luctus sit amet urna.

Mauris lacus leo, volutpat eget gravida nec, pellentesque ut ipsum. Nulla ex nulla, interdum nec pharetra nec, auctor ac nulla. Sed ultricies posuere efficitur. Donec tristique vitae justo quis ullamcorper. Donec convallis metus in leo suscipit volutpat at et mauris. Vivamus posuere maximus venenatis. Fusce convallis lacus eget euismod viverra. Donec imperdiet, magna at mollis dictum, mi turpis laoreet ante, quis lacinia leo ipsum eu elit. Vestibulum semper felis ullamcorper metus lacinia, quis viverra est sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque in turpis convallis, malesuada erat non, blandit nunc.

Maecenas non justo dolor. Curabitur tempus, libero sed sagittis euismod, sem tortor volutpat quam, vel faucibus tellus ex a eros. Etiam a nisl dui. Ut consequat, orci ut euismod imperdiet, ligula leo convallis urna, in rutrum massa massa in leo. Donec in dui a lectus fringilla mattis. Maecenas lacinia blandit luctus. Nulla blandit congue ultricies. Etiam interdum justo sit amet lacus bibendum, sit amet pretium neque auctor. Nam eu arcu nunc. Vestibulum vitae odio arcu. Cras a congue purus, non facilisis diam. Etiam maximus turpis a ultrices efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam accumsan fermentum dolor, id ultrices enim aliquam vitae.

Vestibulum in metus at velit volutpat consectetur vitae eu ligula. Donec dictum erat sapien, sit amet lobortis sapien porttitor eu. Integer id consequat ex. Morbi tristique mi elementum imperdiet pellentesque. Nullam nisi lorem, mollis a ex vitae, sagittis fermentum nibh. Praesent id lacus at est dapibus viverra vel vitae arcu. Fusce scelerisque, neque sed sodales consectetur, dui turpis lobortis leo, et tempor velit elit vitae lacus. Fusce rhoncus eu erat vitae ultrices. Cras luctus metus at lorem hendrerit, quis maximus metus euismod. Sed commodo pulvinar porta. Morbi porta, quam ut accumsan gravida, nulla lectus iaculis magna, vel elementum dolor elit in odio. Pellentesque et gravida massa, eu tincidunt nisi.

Maecenas sed lorem vehicula, lacinia massa sit amet, egestas urna. Vestibulum eu mauris ut dolor condimentum faucibus ac eu erat. Mauris vehicula iaculis pharetra. Suspendisse venenatis varius dolor, vehicula vulputate mi lobortis non. Aenean in tincidunt magna, quis ultrices elit. Vivamus a condimentum dolor. Suspendisse mollis pretium ex at vehicula. In et elit erat. Sed sem enim, laoreet eget lacus eget, tempus egestas sem. Aliquam sed felis in risus varius accumsan.

Phasellus eget tristique lacus. Maecenas eros lorem, vehicula a suscipit quis, malesuada at risus. Etiam pretium, nunc vel iaculis faucibus, justo neque ornare lorem, eu interdum quam velit sit amet urna. Vivamus ultrices bibendum euismod. In vestibulum, ex vel mattis convallis, tellus libero egestas orci, a convallis sem lorem ut purus. Etiam porttitor condimentum diam, ut mollis purus tempus id. Etiam ut mi vitae eros rhoncus vulputate. Integer et nisi metus.

Integer dictum porttitor justo, at ultricies odio fringilla sit amet. Fusce mi tortor, tincidunt et orci quis, tincidunt feugiat odio. Integer in magna lectus. Vivamus quis est ut nunc mattis sodales ut et magna. Sed bibendum euismod augue, nec condimentum orci tincidunt non. Vestibulum volutpat pulvinar lobortis. Curabitur vel euismod dui. Fusce mattis ac est ac ultrices. Proin vitae enim vitae justo luctus tempor vel a augue. Integer commodo pharetra hendrerit. Vivamus eleifend consectetur justo, ac tempus enim dapibus vel. Duis volutpat, metus non vehicula laoreet, augue quam eleifend ligula, nec vestibulum diam neque id massa. Cras efficitur, purus nec dapibus hendrerit, elit nunc rhoncus lorem, vestibulum dictum nisi leo in odio. Nullam tristique dignissim convallis. Maecenas non lacus viverra, facilisis sem at, dictum ante. In in lacinia nibh, non iaculis enim.

Duis in quam posuere, vestibulum lectus ut, efficitur quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum volutpat elementum massa eu vestibulum. Pellentesque aliquet suscipit velit, ut sollicitudin erat imperdiet vel. Cras varius vel ligula non porta. Pellentesque orci neque, sodales eget luctus nec, feugiat ac tortor. Aliquam rutrum cursus bibendum. Cras in enim ut est scelerisque malesuada tempus condimentum justo. Sed congue quam vel eros tincidunt aliquam. Integer faucibus purus sit amet risus convallis, at euismod quam interdum. Pellentesque est ipsum, ultricies a ultrices sit amet, tempus quis purus. In laoreet lacus ac arcu cursus, porttitor consequat augue viverra. Nunc vel egestas ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Integer sed auctor nisl. Donec nec semper urna. Mauris metus lectus, accumsan non ligula efficitur, eleifend placerat lorem. Mauris justo purus, gravida non dui rhoncus, mattis maximus nisl. Nunc euismod ornare sem non tempor. Donec tempus feugiat est, in vehicula lectus lobortis convallis. Integer ac consectetur lorem. Suspendisse placerat blandit leo vitae dictum.

Integer non odio consectetur, bibendum enim in, dignissim tellus. Morbi interdum lobortis mollis. Quisque luctus leo eget arcu euismod tempor. Proin at augue viverra enim vestibulum sagittis. Etiam scelerisque varius quam. Nam id mi at massa commodo tincidunt eu interdum nunc. Morbi a maximus enim. Fusce vel volutpat nisi. Donec fringilla urna metus, quis rhoncus ante tincidunt in. Vivamus finibus orci ut ornare sagittis. Ut posuere pretium urna. Nam semper dolor sit amet odio porta lobortis. Duis bibendum scelerisque lectus, ut lacinia velit rhoncus eu. Praesent sagittis nisi in est pulvinar, ac pulvinar odio pulvinar.

Vestibulum eu arcu turpis. Donec et quam sit amet felis tincidunt malesuada ut nec elit. Aliquam suscipit felis in consequat ultricies. Phasellus accumsan in sem euismod elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel tellus non ipsum tincidunt vestibulum. Cras sit amet sodales ante. Ut molestie pulvinar turpis, sed sagittis risus convallis vel. Sed eget leo sagittis velit mollis feugiat quis sed tellus. Curabitur sit amet nunc et velit vulputate pharetra. Sed leo nisl, pellentesque at dictum eu, placerat et massa. Suspendisse diam turpis, maximus malesuada magna sit amet, porta accumsan turpis.

Vivamus vitae sapien sit amet libero dignissim eleifend at non elit. Morbi euismod ullamcorper libero non dapibus. Mauris ex ipsum, sagittis sit amet ligula in, pretium tempus velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum nunc ante, auctor rutrum metus maximus nec. Etiam vulputate commodo sapien eu ultricies. Proin quis bibendum ligula. Suspendisse suscipit vel justo eget tristique. Fusce interdum nunc laoreet, euismod nibh quis, volutpat turpis.

Mauris pharetra enim dui, ut luctus urna viverra tincidunt. Integer varius nunc sapien, at dictum velit porta a. Aliquam ultrices rhoncus nunc, nec semper elit ultrices volutpat. Curabitur vel cursus ipsum. Etiam varius mi et egestas lobortis. Maecenas in tempus est. Vestibulum gravida et justo quis ultrices. Vivamus maximus consequat elit sed suscipit.

Nulla diam nibh, fringilla ut porttitor eget, interdum eu enim. Aenean sem leo, aliquet et maximus at, vestibulum nec erat. Nullam quis tellus porta, congue sapien ut, volutpat ex. Quisque eu odio vel augue auctor pellentesque. Nulla mauris nibh, feugiat non diam in, maximus dignissim lorem. Phasellus blandit, est congue blandit pellentesque, nisl nibh porta dolor, in malesuada diam ligula eu quam. Praesent vel elit nunc. Pellentesque ornare blandit nisi, non pulvinar ex efficitur eget. Curabitur ut tincidunt metus. Nulla feugiat neque at diam accumsan congue sit amet eu ipsum. Sed id vestibulum nunc.

Fusce nisi nunc, interdum sit amet sodales nec, facilisis non lacus. Cras tincidunt nibh in felis vehicula, ac molestie mi convallis. Mauris a justo ac ante facilisis condimentum ac ut justo. Mauris eu arcu facilisis, dignissim sem sit amet, commodo mi. Integer faucibus ultrices augue, blandit interdum enim. Nullam tincidunt dapibus quam, id convallis felis dapibus sit amet. In rhoncus volutpat diam a dignissim. Mauris viverra eget nisl vitae pharetra. Proin turpis metus, congue vel quam at, mollis egestas urna. Cras ut purus dolor. Mauris mattis metus nec libero varius, at volutpat est consectetur.

Vivamus sem sapien, pharetra in quam a, tempus convallis risus. Sed et aliquam turpis. Maecenas vehicula posuere tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce semper ultricies placerat. Nullam mollis convallis ligula. Vivamus in dictum leo. Pellentesque sed porttitor nisl. Vivamus enim eros, consectetur ut odio in, volutpat finibus massa. Cras vitae massa in justo consequat congue vel efficitur velit. Fusce cursus, neque sed rhoncus ullamcorper, lacus nulla egestas ante, porta fermentum nunc erat ut dolor. Fusce suscipit ac ipsum ut laoreet.

Maecenas in neque gravida odio ullamcorper tincidunt lobortis id elit. Cras at turpis euismod, mollis tellus eu, tincidunt erat. Sed mattis ante in libero ornare, eu faucibus erat vestibulum. Vestibulum vitae aliquam est. Suspendisse lobortis euismod augue a eleifend. Phasellus et lobortis elit, a malesuada ipsum. Nunc dui leo, condimentum sit amet pulvinar sit amet, viverra ac orci. Pellentesque eget diam vitae diam convallis cursus.

Quisque ac faucibus lorem, id molestie ante. Pellentesque sit amet faucibus diam, commodo maximus nisl. Phasellus commodo varius dolor ut ornare. Aenean non feugiat erat. Nulla in nibh vitae lacus iaculis efficitur quis id nisi. Donec non lectus ullamcorper ex porttitor aliquam sit amet et velit. Morbi condimentum facilisis lectus at rhoncus.

Mauris nulla orci, porta et volutpat vel, mattis non mi. Morbi eget purus in lacus ornare porta. Vivamus mattis feugiat ullamcorper. Nunc luctus libero condimentum ligula malesuada, quis blandit felis aliquet. Sed vitae vestibulum felis. Vestibulum consequat mi enim. Aenean interdum molestie dolor quis imperdiet. Ut at fringilla lorem. Aliquam iaculis porta risus eget scelerisque.

Integer imperdiet ante ac gravida accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer bibendum vel neque a aliquam. Cras cursus porta faucibus. Proin a nisi a tellus pharetra feugiat in et metus. Vestibulum ac ultricies ante. Curabitur pharetra et leo non fringilla. Nunc in interdum ligula. Pellentesque cursus mi arcu, eget egestas ipsum varius et. Nam vehicula mi sit amet vehicula posuere. Duis a viverra nunc, sollicitudin volutpat eros.
    </div>)
}

export default ModalPage;