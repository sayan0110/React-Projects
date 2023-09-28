const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn">
          <button>Shop Now </button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <a href="https://www.amazon.in/Nike-University-Running-Shoes-1-5-847473-616/dp/B0192EW4B2/ref=pd_rhf_d_se_s_pd_sbs_rvi_sccl_2_5/260-3354232-3805253?pd_rd_w=sOIej&content-id=amzn1.sym.f2f99b52-a5ca-432b-8bfe-0d72feb3d1ba&pf_rd_p=f2f99b52-a5ca-432b-8bfe-0d72feb3d1ba&pf_rd_r=7PXZ208PCC4BKVYRPWY2&pd_rd_wg=BKAJL&pd_rd_r=89654c30-2844-4ebf-8662-16169e6d0ac8&pd_rd_i=B09QN1Y9TV&psc=1">
              <img src="/images/amazon.png" alt="amazon-logo" />
            </a>
            <a href="https://www.flipkart.com/nike-pegasus-trail-3-gore-tex-waterproof-running-shoes-men/p/itmd6fe5917867f5?pid=SHOGSFAYRYWTKTWK&lid=LSTSHOGSFAYRYWTKTWKFQ0KHC&marketplace=FLIPKART&q=nike+red+shoe&store=osp%2Fcil&srno=s_1_36&otracker=search&otracker1=search&fm=Search&iid=a55444e3-a373-4594-856e-9ebe08f039f8.SHOGSFAYRYWTKTWK.SEARCH&ppt=sp&ppn=sp&ssid=evuofpi8800000001695812173848&qH=4d78dbf5782b77be">
              <img src="/images/flipkart.png" alt="flipkart-logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image.png" alt="hero-image" />
      </div>
    </main>
  );
};

export default HeroSection;
