import Image from "next/image";
import styles from "../styles/Trending.module.css";
const Trending = () => {
  return (
    <>
      <h2 className={styles.title}>Trending</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div
            className={styles.imageWrapepr}
            // style={{
            //   position: "relative",
            //   height: "10rem",
            //   marginBottom: "2.58rem",
            // }}
          >
            <Image src="/nft1.png" layout="fill" className={styles.nftImage} />
            <div className={styles.backDrop}>Primates</div>
          </div>
          <div className={styles.cardDetails}>
            <div className={styles.bidInfo}>
              <p className={styles.lastBid}>Last bid:</p>
              <div className={styles.bidAmmountWrapper}>
                <Image src={"/eth.png"} height={20} width={10} />
                <p className={styles.bidAmount}>1.2 ETH</p>
              </div>
            </div>
            <div className={styles.buttons}>
              <button className={styles.primaryBtn}>Place a bid</button>
              <button className={styles.secondaryBtn}>History</button>
            </div>
          </div>
        </div>
        {/* //ajsdhfjashdfjashdfjhasdf */}
        <div className={styles.card}>
          <div className={styles.imageWrapepr}>
            <Image src="/nft1.png" layout="fill" />
            <div className={styles.backDrop}>Ragnarok meta</div>
          </div>
          <div className={styles.cardDetails}>
            <div className={styles.bidInfo}>
              <p className={styles.lastBid}>Last bid:</p>
              <div className={styles.bidAmmountWrapper}>
                <Image src={"/eth.png"} height={20} width={10} />
                <p className={styles.bidAmount}>1.2 ETH</p>
              </div>
            </div>
            <div className={styles.buttons}>
              <button className={styles.primaryBtn}>Place a bid</button>
              <button className={styles.secondaryBtn}>History</button>
            </div>
          </div>
        </div>
        {/* //aklsjdflaksjhdfkjhasd */}

        {/* //asdkjfhalksjdfhlakjsdhfkljhashfd */}
        <div className={styles.card}>
          <div className={styles.imageWrapepr}>
            <Image src="/nft1.png" layout="fill" />
            <div className={styles.backDrop}>Devil valley</div>
          </div>
          <div className={styles.cardDetails}>
            <div className={styles.bidInfo}>
              <p className={styles.lastBid}>Last bid:</p>
              <div className={styles.bidAmmountWrapper}>
                <Image src={"/eth.png"} height={20} width={10} />
                <p className={styles.bidAmount}>1.2 ETH</p>
              </div>
            </div>
            <div className={styles.buttons}>
              <button className={styles.primaryBtn}>Place a bid</button>
              <button className={styles.secondaryBtn}>History</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
